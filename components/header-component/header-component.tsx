import NavComponent from "../nav-component/nav-component";
import styles from "./header-component.module.scss";

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="flex-row">
        <div className="  ">
          <NavComponent />
          <h2 className="  bg-green-700 text-orange-50 px-2 hover:bg-sky-950 cursor-grab ">
            Brand Name
          </h2>
        </div>
      </div>
    </header>
  );
}
