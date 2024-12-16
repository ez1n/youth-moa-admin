import { ComponentPropsWithoutRef } from "react";
import { tw } from "../../../tailwindmerge.config";

interface PropsType extends ComponentPropsWithoutRef<"input"> {
  helpText?: string;
  className?: string;
}

export function DatePicker(props: PropsType) {
  const { helpText, className, ...rest } = props;
  return (
    <div className="relative">
      <input
        type="date"
        className={tw(
          "w-full border rounded-[10px] border-border-gray px-4 py-3",
          helpText ? "border-red" : "border-border-gray",
          className
        )}
        {...rest}
      />

      {helpText && (
        <p className="absolute text-red text-xs ml-4 mt-1/2 w-max">
          {helpText}
        </p>
      )}
    </div>
  );
}
