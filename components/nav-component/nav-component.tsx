import Link from "next/link";
import styles from "./nav-component.module.scss";

export default function NavComponent(): JSX.Element {
  return (
    <nav data-testid="nav">
      <ul className={`flex gap-2 ${styles.list}`}>
        <li className={styles["list__item"]}>
          <Link href={"/"}>Indie Gamer 
          <svg className="fill-orange-50 ml-2 w-6 h-6"  id="Home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="m47.71,29.35h-31.42c-2.36,0-4.21,1.93-4.21,4.4v21.02c0,2.34,1.89,4.24,4.21,4.24h9.61v-14.01h12.2l.15,14.01h9.46c2.32,0,4.21-1.9,4.21-4.24v-21.02c0-2.47-1.85-4.4-4.21-4.4Z"/>
  <path d="m59.12,29.59L36,6.07c-2.6-2.76-5.39-2.76-8,0h0L4.88,29.59c-.45.48-.58,1.19-.34,1.81.24.62.81,1.03,1.45,1.03h52.02c.64,0,1.21-.41,1.45-1.03.24-.62.11-1.34-.35-1.81Z"/>
</svg>
          </Link>
        </li>
        <li className={`ml-auto ${styles["list__item"]}`}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={styles["list__item"]}>
          <Link href={"/reviews"}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
