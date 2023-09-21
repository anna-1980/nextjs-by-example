import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Review {
  title: string;
  date: string;
  image: string;
  body: string;
  slug: string;
}

export async function getReview(slug: string): Promise<Review> {
  const textContentMD = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    data: { title, date, image },
    content,
  } = matter(textContentMD);
  const body = marked(content);

  return { slug, title, date, image, body, };
}

export async function getReviews(): Promise<Review[]> {
  const files = await readdir("./content/reviews");
  //filter and  strip put the file extension
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
  console.log(slugs);
  const reviews: Review[] = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews;
}
