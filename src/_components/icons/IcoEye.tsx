import { tw } from "../../../tailwindmerge.config";

import type { IconProps } from "./type";

export const IcoEye = (props: IconProps) => {
  const { color = "#909092", size = 20, className } = props;

  return (
    <span className={tw("inline-block", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2871 10.2342C20.2584 10.1694 19.5636 8.62805 18.019 7.0834C15.9608 5.02523 13.3612 3.9375 10.5 3.9375C7.63874 3.9375 5.03917 5.02523 2.98101 7.0834C1.43636 8.62805 0.738273 10.1719 0.712844 10.2342C0.67553 10.3181 0.65625 10.409 0.65625 10.5008C0.65625 10.5927 0.67553 10.6835 0.712844 10.7674C0.741555 10.8322 1.43636 12.3728 2.98101 13.9174C5.03917 15.9748 7.63874 17.0625 10.5 17.0625C13.3612 17.0625 15.9608 15.9748 18.019 13.9174C19.5636 12.3728 20.2584 10.8322 20.2871 10.7674C20.3245 10.6835 20.3437 10.5927 20.3437 10.5008C20.3437 10.409 20.3245 10.3181 20.2871 10.2342ZM10.5 15.75C7.97507 15.75 5.76925 14.8321 3.94323 13.0225C3.19402 12.2773 2.5566 11.4277 2.05077 10.5C2.5564 9.57216 3.19385 8.7225 3.94323 7.97754C5.76925 6.16793 7.97507 5.25 10.5 5.25C13.0249 5.25 15.2307 6.16793 17.0567 7.97754C17.8074 8.72238 18.4462 9.57202 18.9533 10.5C18.3619 11.6041 15.7853 15.75 10.5 15.75ZM10.5 6.5625C9.72123 6.5625 8.95995 6.79343 8.31243 7.22609C7.66492 7.65875 7.16024 8.2737 6.86222 8.99318C6.5642 9.71267 6.48622 10.5044 6.63815 11.2682C6.79008 12.032 7.16509 12.7336 7.71576 13.2842C8.26643 13.8349 8.96802 14.2099 9.73182 14.3618C10.4956 14.5138 11.2873 14.4358 12.0068 14.1378C12.7263 13.8398 13.3412 13.3351 13.7739 12.6876C14.2066 12.04 14.4375 11.2788 14.4375 10.5C14.4364 9.45604 14.0212 8.45516 13.283 7.71697C12.5448 6.97878 11.5439 6.56359 10.5 6.5625ZM10.5 13.125C9.98082 13.125 9.4733 12.971 9.04162 12.6826C8.60994 12.3942 8.27349 11.9842 8.07481 11.5045C7.87613 11.0249 7.82414 10.4971 7.92543 9.98789C8.02672 9.47869 8.27672 9.01096 8.64384 8.64384C9.01095 8.27673 9.47868 8.02672 9.98788 7.92544C10.4971 7.82415 11.0249 7.87614 11.5045 8.07482C11.9842 8.2735 12.3942 8.60995 12.6826 9.04163C12.971 9.47331 13.125 9.98082 13.125 10.5C13.125 11.1962 12.8484 11.8639 12.3561 12.3562C11.8639 12.8484 11.1962 13.125 10.5 13.125Z"
          fill={color}
        />
      </svg>
    </span>
  );
};
