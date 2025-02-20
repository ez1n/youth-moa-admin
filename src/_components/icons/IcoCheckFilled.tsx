import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoCheckFilled = (props: IconProps) => {
  const { size = 16, color, className } = props;

  return (
    <span className={tw("flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99968 14.4998C8.87532 14.501 9.74256 14.3291 10.5515 13.9939C11.3605 13.6588 12.0953 13.1672 12.7137 12.5472C13.3337 11.9288 13.8253 11.194 14.1605 10.385C14.4956 9.57606 14.6675 8.70882 14.6663 7.83318C14.6675 6.95753 14.4955 6.0903 14.1604 5.28132C13.8253 4.47233 13.3337 3.73754 12.7137 3.11918C12.0953 2.49919 11.3605 2.00751 10.5515 1.6724C9.74256 1.3373 8.87532 1.16537 7.99968 1.16651C7.12404 1.16539 6.25681 1.33733 5.44782 1.67243C4.63884 2.00753 3.90405 2.4992 3.28568 3.11918C2.6657 3.73754 2.17404 4.47233 1.83893 5.28132C1.50383 6.0903 1.3319 6.95753 1.33301 7.83318C1.33188 8.70882 1.5038 9.57606 1.83891 10.385C2.17401 11.194 2.66569 11.9288 3.28568 12.5472C3.90405 13.1672 4.63884 13.6588 5.44782 13.9939C6.25681 14.329 7.12404 14.501 7.99968 14.4998Z"
          fill={color}
          stroke={color}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M5.33301 7.83325L7.33301 9.83325L11.333 5.83325"
          fill={color}
        />
        <path
          d="M5.33301 7.83325L7.33301 9.83325L11.333 5.83325"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
