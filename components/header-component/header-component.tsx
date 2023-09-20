import NavComponent from "../nav-component/nav-component";
import styles from "./header-component.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className="flex">
      <div className="grow">
        <NavComponent />
      </div>
      <h2 className="self-center bg-green-500 text-orange-50 px-2 hover:bg-sky-950 cursor-grab ">
        Logo to be
      </h2>
    </div>
  );
}
