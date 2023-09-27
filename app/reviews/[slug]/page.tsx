import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReview, getSlugs } from "@/lib/reviews";
import Buttons from "@/components/buttons/share-link-btn-component/buttons";
import ShareBtn from "@/components/buttons/share-link-btn-component/share-link-btn-component";

export interface ReviewPageProps {
  params: {
    slug: string;
  };
}

// get nextjs to generate static pages even when using dynamic routes - relevant for production
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
  const { title } = await getReview(slug);
  return {
    title: title,
  };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const { title, date, image, body } = await getReview(slug);
  const review = await getReview(slug);

  // console.log(["Review"], review);

  const onClickFunction = `navigator.clipboard.writeText(window.location.href)`;
  const helperFunction = `setTimeout(() => {
        alert("BTN helper function");
      }, 500)`;

  return (
    <div>
      <HeadingComponent text={title} />
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2 mr-4">{date}</p>
        <ShareBtn onClickFunction={onClickFunction} />
      </div>
      {image ? (
        <img
          src={image}
          alt="image for Hollow Knights"
          width="640"
          height="360"
          className="mb-2 rounded-lg"
        ></img>
      ) : (
        <p>"no Image"</p>
      )}
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-8 max-w-screen-sm prose prose-slate"
      ></article>
      {!date ? (
        <Link href={"/reviews"}>Reviews</Link>
      ) : (
        <Link href={"/"}>Home</Link>
      )}
    </div>
  );
}
