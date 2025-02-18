import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoCancel = (props: IconProps) => {
  const { size = 18, color = "#909092", className, onClick } = props;

  return (
    <span className={tw("inline-block", className)} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1L1 17M1 1L17 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
