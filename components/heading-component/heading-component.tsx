export interface HeadingComponentProps {
  text: string;
  className?: string;
}

export default function HeadingComponent({ text, className }: HeadingComponentProps) {
  return <h1 className={`font-bold pb-2 text-2xl font-orbitron ` + className}>{text}</h1>;
}
