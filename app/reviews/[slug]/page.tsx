import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReview, getSlugs } from "@/lib/reviews";
import Buttons from "@/components/buttons/share-link-btn-component/buttons";
import ShareBtn from "@/components/buttons/share-link-btn-component/share-link-btn-component";
import Image from "next/image";
import { notFound } from "next/navigation";

export interface ReviewPageProps {
  params: {
    slug: string;
  };
}

// generate static paths for dynamic routes
// export const dynamic = "force-dynamic";

// (static generation) get nextjs to generate static pages even when using dynamic routes - relevant for production
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const { title, date, image, body } = await getReview(slug);
  const review = await getReview(slug);
  if (!title) {
    notFound();
  }
  // console.log(["Review"], review);

  const onClickFunction = `navigator.clipboard.writeText(window.location.href)`;
  const helperFunction = `setTimeout(() => {
        alert("BTN helper function");
      }, 500)`;

  return (
    <div className="mx-auto max-w-lg ">
      <HeadingComponent text={title} />
      <div className="flex justify-between  w-full items-center  ">
        <p className="italic pb-2 mr-4">{date}</p>
        <ShareBtn onClickFunction={onClickFunction} />
      </div>
      {image ? (
        <Image
          src={image}
          alt=""
          width="512"
          height="512"
          className="mb-2 rounded-lg"
        ></Image>
      ) : (
        <p>&quot; no Image &quot; </p>
      )}
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="pl-2 mb-8 max-w-lg text-justify prose prose-slate"
      ></article>
      {!date ? (
        <Link href={"/reviews"}>Reviews</Link>
      ) : (
        <Link href={"/"}>Home</Link>
      )}
    </div>
  );
}
