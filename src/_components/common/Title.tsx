import { tw } from "../../../tailwindmerge.config";

interface PropsType {
  title: string;
  className?: string;
}

export function Title(props: PropsType) {
  const { title, className } = props;

  return <h1 className={tw("text-2xl font-semibold", className)}>{title}</h1>;
}
