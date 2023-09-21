import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default async function StarDewValleyPage() {
  const textContentMD = await readFile(
    "./content/reviews/stardew-valley.md",
    "utf-8"
  );
  const { data: {title, date, image}, content } = matter(textContentMD);
  const textHTML = marked(content );

   
  return (
    <div>
      <HeadingComponent text={title} />
      <p className="italic pb-2">{date}</p>
      <img
        src={image}
        alt="image for Hollow Knoghts"
        width="640"
        height="360"
        className="mb-2 rounded-lg"
      ></img>
      <article
        dangerouslySetInnerHTML={{ __html: textHTML }}
        className="mb-8 max-w-screen-sm prose prose-slate"
      ></article>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
