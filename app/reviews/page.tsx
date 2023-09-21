import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function Reviews() {
  return (
    <>
      <HeadingComponent text="Reviews" />
      <p>Here are all game reviews available</p>
      <ul>
        <li>
          <Link href={"/reviews/stardew-valley"}>Star Dew Valley</Link>
        </li>
        <li>
          <Link href={"/reviews/hollow-knights"}>Hollow Knights</Link>
        </li>
      </ul>
    </>
  );
}
