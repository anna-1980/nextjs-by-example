import Link from "next/link";
import HeadingComponent from "@/components/heading-component/heading-component";

export default function StarDewValleyPage() {
  return (
    <div>
      <HeadingComponent text="Star Dew Valley" />
      <img src="/images/stardew-valley.jpg" alt="image for Hollow Knoghts" width="640" height="360"
      className="mb-2 rounded-lg"
      ></img>
      <p>StarDew Valley is a game about farming and making friends.</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
