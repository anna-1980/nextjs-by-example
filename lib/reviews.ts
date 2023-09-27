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

const CMS_URL = "http://127.0.0.1:1337";

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
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ["uid", "title", "date", "publishedAt"],
        populate: { image: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 4 },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  console.log("from server", data[0].attributes.image.data[0].attributes.url);
  return data.map(({ attributes }) => ({
    slug: attributes.uid,
    title: attributes.title,
    date: attributes.date,
    image: CMS_URL + attributes.image.data[0].attributes.url,
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
