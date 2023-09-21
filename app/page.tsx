import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function Home(): JSX.Element {
  return (
    <div >
      <HeadingComponent text="Indie Games"></HeadingComponent>
      <p className="pb-3">Only the ebst Indie Games, reviewed for you</p>
      <div className="mx-auto sm:ml-reset bg-white border w-80 shadow rounded-lg overflow-hidden hover:shadow-xl sm:w-full">
          <Link href={"/reviews/stardew-valley"} className='flex flex-col sm:flex-row'>
            {" "}
            <img
              src="/images/stardew-valley.jpg"
              alt="image for Hollow Knoghts"
              width="320"
              height="80"
         
            ></img>
            <div>
            <h2 className=" py-1 text-center font-semibold sm:text-left sm:px-2">Star Dew Valley</h2>
            <p className="text-center">Some summary of th ereview</p>
            </div>
          </Link>
           
        </div>
    </div>
  );
}
