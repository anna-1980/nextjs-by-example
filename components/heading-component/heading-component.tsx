import { ReactNode } from "react";
export interface HeadingComponentProps {
  text: string;
  children?: ReactNode;
}

export default function HeadingComponent({
  text,
  children,
}: HeadingComponentProps) {
  return <h1 className= {`font-bold pb-2 text-2xl font-orbitron `} >{text}</h1>;
}
