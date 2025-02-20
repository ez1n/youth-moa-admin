import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoAccount = (props: IconProps) => {
  const { size = 24, className } = props;

  return (
    <span className={tw("inline-block", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="10" r="3" fill="#828086" />
        <path
          d="M12 14C8.48797 14 5.74684 15.9272 5.13031 17.4127C4.97895 17.7774 5.11606 18.1775 5.38691 18.4648C6.18108 19.3072 8.24416 21 12 21C15.7558 21 17.8189 19.3072 18.6131 18.4648C18.8839 18.1775 19.021 17.7774 18.8697 17.4127C18.2532 15.9272 15.512 14 12 14Z"
          fill="#828086"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          transform="rotate(90 12 12)"
          stroke="#828086"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
};
