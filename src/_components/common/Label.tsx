import { ComponentProps } from "react";
import { tw } from "../../../tailwindmerge.config";

interface PropsType extends ComponentProps<"span"> {
  label: string;
  required?: boolean;
  className?: string;
}

export function Label(props: PropsType) {
  const { label, required = false, className, ...rest } = props;

  return (
    <span
      className={tw(
        "text-gray-000 font-medium",
        required && "after:content-['*'] after:text-red after:ml-1",
        className
      )}
      {...rest}
    >
      {label}
    </span>
  );
}
