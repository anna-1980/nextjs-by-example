import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function HollowKnightsPage() {
  return (
    <>
      <HeadingComponent text="Hollow Knights"/> 
      <img src="/images/hollow-knight.jpg" alt="image for Hollow Knoghts" width="640" height="360"
      className="mb-2 rounded-lg"
      ></img>
      <p>This will be the review for Hollow Knights</p>
      <Link href={"/"}>Home</Link>
    </>
  );
}
