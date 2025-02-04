import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoLogout = (props: IconProps) => {
  const { size = 24, className, onClick } = props;

  return (
    <span className={tw("inline-block", className)} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 8L14.5 12L10.5 16"
          stroke="#828086"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L14 12"
          stroke="#828086"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 5L17 5C18.1046 5 19 5.89543 19 7L19 17C19 18.1046 18.1046 19 17 19L14 19"
          stroke="#828086"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
