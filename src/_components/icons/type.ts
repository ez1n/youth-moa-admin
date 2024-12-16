import type { CSSProperties } from "react";

export type IconProps = {
  size?: number;
  color?: CSSProperties["color"];
  stroke?: CSSProperties["color"];
  className?: string;
  onClick?: () => void;
};
