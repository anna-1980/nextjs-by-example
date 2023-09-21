import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function HollowKnightsPage() {
  return (
    <>
      <HeadingComponent text="Hollow Knights"/> 
      <Link href={"/"}>Home</Link>
    </>
  );
}
