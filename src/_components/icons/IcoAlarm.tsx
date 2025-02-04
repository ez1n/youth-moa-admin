import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoAlarm = (props: IconProps) => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V15L4 17H20L18 15V9Z"
          stroke="#828086"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C13.6569 22 15 20.6569 15 19H9C9 20.6569 10.3431 22 12 22Z"
          fill="#828086"
        />
      </svg>
    </span>
  );
};
