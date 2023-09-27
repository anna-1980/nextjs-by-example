import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";

export default async function Home() {
  const review = await getFeaturedReview();
  return (
    <div>
      <HeadingComponent text="Indie Games"></HeadingComponent>
      <p className="pb-3">Only the best Indie Games, reviewed for you</p>
      <p className="pb-3">Featured:</p>
      <div className="mx-auto sm:ml-reset bg-white border w-80 shadow rounded-lg overflow-hidden   hover:shadow-xl sm:w-full">
        {review && (
          <Link
            href={` /reviews/${review.slug}`}
            className="flex flex-col sm:flex-row"
          >
            {" "}
            <Image src={review.image} width="320" height="80" alt="" priority></Image>
            <div className="max-h-6">
              <h2 className=" py-1 text-center font-semibold sm:text-left sm:px-2">
                {review.title}
              </h2>
              <article
                dangerouslySetInnerHTML={{__html: review.body }}
                className=" px-2  max-w-screen-sm prose prose-slate"
              ></article>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
