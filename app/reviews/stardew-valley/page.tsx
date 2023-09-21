import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReview } from "@/lib/reviews";


export default async function StarDewValleyPage() {
  const { title, date, image, body } = await getReview("stardew-valley");
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
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-8 max-w-screen-sm prose prose-slate"
      ></article>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
