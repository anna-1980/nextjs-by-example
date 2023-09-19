import Link from "next/link";
import styles from "./header-component.module.scss";

export default function Header(): JSX.Element {
  return (
    <>
      <nav>
        <ul className={styles.list}>
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
    </>
  );
}
