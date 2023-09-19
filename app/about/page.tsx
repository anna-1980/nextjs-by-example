import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        <Link href={"/"}>Home</Link>
      </p>
      <p>
        <a href="/reviews/hollow-knights">Hollow Knights</a>
      </p>
    </>
  );
}
