import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReview(slug: string) {
  const textContentMD = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    data: { title, date, image },
    content,
  } = matter(textContentMD);
  const body = marked(content);

  return { title, date, image, body };
}
