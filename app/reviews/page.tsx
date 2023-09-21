import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function Reviews() {
  return (
    <>
      <HeadingComponent text="Reviews" />
      <p>Here are all game reviews available</p>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border w-80 shadow rounded-lg overflow-hidden hover:shadow-xl">
          <Link href={"/reviews/stardew-valley"}>
            {" "}
            <img
              src="/images/stardew-valley.jpg"
              alt="image for Hollow Knoghts"
              width="320"
              height="80"
              className=" "
            ></img>
            <h2 className="py-1 text-center">Star Dew Valley</h2>
          </Link>
        </li>
        <li className="bg-white border w-80 shadow rounded-lg overflow-hidden hover:shadow-xl">
          <Link href={"/reviews/hollow-knights"}>
            {" "}
            <img
              src="/images/hollow-knight.jpg"
              alt="image for Hollow Knoghts"
              width="320"
              height="80"
              className=" "
            ></img>{" "}
            <h2 className="py-1 text-center">Hollow Knights</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
