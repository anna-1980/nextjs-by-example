import Link from "next/link";

export default function Sandbox() {
  return (
    <>
      <h2>Sandbox</h2>
      <h3 className="text-3xl font-bold underline">
        From Tailwind. Hello world!
      </h3>

      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/sandbox/nested-route"}>
            Nested route (Sandbox nested)
          </Link>
        </li>
        <li>
          <Link href={"/reviews"}>Reviews</Link>
          <ul>
            <li>
              <Link href={"/reviews/stardew-valley"}>Star Dew Valley</Link>
            </li>
            <li>
              <Link href={"/reviews/hollow-knights"}>Hollow Knights</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
