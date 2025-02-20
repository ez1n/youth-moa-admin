import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoReset = (props: IconProps) => {
  const { size = 24, color = "#303CE9", className, onClick } = props;

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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6567 3.92984C19.209 3.92984 19.6567 4.37755 19.6567 4.92984L19.6567 8.75827C19.6567 9.02348 19.5514 9.27784 19.3638 9.46537C19.1763 9.65291 18.922 9.75827 18.6567 9.75827L14.8283 9.75827C14.276 9.75827 13.8283 9.31055 13.8283 8.75827C13.8283 8.20598 14.276 7.75827 14.8283 7.75827L17.6567 7.75827L17.6567 4.92984C17.6567 4.37755 18.1045 3.92984 18.6567 3.92984Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C14.5091 4 16.749 5.15631 18.2141 6.9613C18.5622 7.3901 18.4967 8.01987 18.0679 8.36794C17.6391 8.716 17.0094 8.65056 16.6613 8.22176C15.5596 6.86452 13.8811 6 12 6Z"
          fill={color}
        />
      </svg>
    </span>
  );
};
