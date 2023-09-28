import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export const metadata = {
  title: "Reviews",
};

export default async function Reviews() {
  const reviews = await getReviews(3);

  return (
    <div className="flex flex-col items-center">
      <HeadingComponent text="Reviews" />
      <p>Here are all game reviews available</p>
      <ul className=" flex flex-row justify-evenly flex-wrap  gap-3">
        {reviews.map((review, index) => {
          return (
            <li
              key={review.slug}
              className="bg-white border w-80 shadow rounded-lg overflow-hidden hover:shadow-xl"
            >
              <Link href={` /reviews/${review.slug}`}>
                <Image
                  src={review.image}
                  width="320"
                  height="80"
                  alt=""
                  priority={index === 0}
                ></Image>
                <h2 className="py-1 text-center font-semibold">
                  {review.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
