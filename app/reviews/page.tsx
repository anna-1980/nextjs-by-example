import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function Reviews() {
  const reviews = await getReviews();

  console.log(['Reviews'], reviews)
  return (
    <>
      <HeadingComponent text="Reviews" />
      <p>Here are all game reviews available</p>
      <ul className="flex flex-row flex-wrap  gap-3">
        {reviews.map((review) => {
          return (
            <li
              key={review.slug}
              className="bg-white border w-80 shadow rounded-lg overflow-hidden hover:shadow-xl"
            >
              <Link href={` /reviews/${review.slug}`}>
                {" "}
                <img src={review.image} width="320" height="80"></img>
                <h2 className="py-1 text-center font-semibold">
                  {review.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
