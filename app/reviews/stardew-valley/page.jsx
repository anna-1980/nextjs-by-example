import Link from "next/link";
import HeadingComponent from "../../../components/heading-component/heading-component";

export default function StarDewValleyPage() {
  return (
    <div>
      <HeadingComponent text="Star Dew Valley" />
      <p>StarDew Valley is a game about farming and making friends.</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
