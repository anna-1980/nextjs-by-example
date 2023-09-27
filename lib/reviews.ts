import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import qs from "qs";

export interface Review {
  title: string;
  date: string;
  image: string;
  body: string;
  slug: string;
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
  try {
    const textContentMD = await readFile(
      `./content/reviews/${slug}.md`,
      "utf-8"
    );
    const {
      data: { title, date, image },
      content,
    } = matter(textContentMD);
    const body = marked(content);
    return { slug, title, date, image, body };
  } catch (error) {
    console.log("ERROR", error);
    return {
      slug,
      title: ` No review of "${slug}" title`,
      date: null,
      image: null,
      body: "No review exists",
    };
  }
}

export async function getReviews(): Promise<Review[]> {
  const url =
    "http://127.0.0.1:1337/api/posts?" +
    qs.stringify(
      {
        fields: ["uid", "title", "date", "content", "publishedAt"],
        populate: { image: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 2 },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.uid,
    title: attributes.title,
  }));
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir("./content/reviews");
  //filter and  strip put the file extension
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
  return slugs;
}
