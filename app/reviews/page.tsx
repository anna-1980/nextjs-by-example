import Link from "next/link";

export default function Reviews() {
  return (
    <>
      <h2>Reviews</h2>
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
