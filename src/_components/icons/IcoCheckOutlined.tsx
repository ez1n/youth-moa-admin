import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoCheckOutlined = (props: IconProps) => {
  const { size = 29, color, className } = props;

  return (
    <span className={tw("flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 19C11.1821 19.0015 12.3529 18.7694 13.445 18.317C14.5372 17.8646 15.5291 17.2009 16.3639 16.3639C17.2009 15.5291 17.8646 14.5372 18.317 13.445C18.7694 12.3529 19.0015 11.1821 19 10C19.0015 8.81788 18.7694 7.64712 18.317 6.55499C17.8646 5.46287 17.2009 4.4709 16.3639 3.63611C15.5291 2.79912 14.5372 2.13536 13.445 1.68297C12.3529 1.23057 11.1821 0.998476 10 1.00001C8.81788 0.998501 7.64712 1.23061 6.55499 1.683C5.46287 2.13539 4.4709 2.79914 3.63611 3.63611C2.79914 4.4709 2.13539 5.46287 1.683 6.55499C1.23061 7.64712 0.998501 8.81788 1.00001 10C0.998476 11.1821 1.23057 12.3529 1.68297 13.445C2.13536 14.5372 2.79912 15.5291 3.63611 16.3639C4.4709 17.2009 5.46287 17.8646 6.55499 18.317C7.64712 18.7694 8.81788 19.0015 10 19Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6.40039 9.9998L9.10039 12.6998L14.5004 7.2998"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
