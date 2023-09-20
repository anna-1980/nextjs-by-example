import Link from "next/link";
import styles from "./nav-component.module.scss";

export default function NavComponent(): JSX.Element {
  return (
    <nav data-testid="nav">
      <ul className={`flex gap-2 ${styles.list}`}>
        <li className={styles["list__item"]}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles["list__item"]}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={styles["list__item"]}>
          <Link href={"/reviews"}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
