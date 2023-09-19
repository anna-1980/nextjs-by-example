import Link from "next/link";

export default function Sandbox() {
  return (
    <>
      <h2>Sandbox</h2>
      <ul>
        <li>
          {" "}
          <Link href={"/"}>Home</Link>
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
