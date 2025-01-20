import React from "react";

export const ArrowUp = ({
  onClick,
  color = "#A594F9",
  width = 24,
  height = 24,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div onClick={onClick} className={`text-${color}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 14L12 10L8 14"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export const ArrowDown = ({
  onClick,
  color = "#A594F9",
  width = 24,
  height = 24,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div onClick={onClick} className={`text-${color}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 10L12 14L8 10"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
