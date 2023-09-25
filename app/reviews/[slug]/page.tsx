import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";
import { getReview, getSlugs } from "@/lib/reviews";import Buttons from "@/components/buttons/buttons";
 

export interface ReviewPageProps {
  params: {
    slug: string;
  };
}

// get nextjs to generate static pages even when using dynamic routes
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

  let clicked
 const handleClick = () => {
  navigator.clipboard.writeText(window.location.href);
  // console.log("clicked")
  clicked(true);
  setTimeout(() => {
  clicked(false) ;
  }, 2000);
};

  return (
    <div>
      <HeadingComponent text={title} />
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2 mr-4">{date}</p>
        <Buttons />
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
