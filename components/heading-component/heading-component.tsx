export interface HeadingComponentProps {
  text: string;
}

export default function HeadingComponent({ text }: HeadingComponentProps) {
  return <h1 className={`font-bold pb-2 text-2xl font-orbitron `}>{text}</h1>;
}
