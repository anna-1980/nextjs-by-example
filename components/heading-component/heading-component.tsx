import { ReactNode } from "react";
import { orbitron } from '@/app/fonts';
export interface HeadingComponentProps {
  text: string;
  children?: ReactNode;
}

export default function HeadingComponent({
  text,
  children,
}: HeadingComponentProps) {
  return <h1 className= {`font-bold pb-2 text-2xl ${orbitron.className}`} >{text}</h1>;
}
