import Link from "next/link";
import HeadingComponent from "../../components/heading-component/heading-component";

export default function AboutPage() {
  return (
    <>
      <HeadingComponent text="About" />
      <p>
        <Link href={"/"}>Home</Link>
      </p>
      <p>
        <a href="/reviews/hollow-knights">Hollow Knights</a>
      </p>
    </>
  );
}
