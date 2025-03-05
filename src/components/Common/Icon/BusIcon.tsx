import React from "react";

const BusIcon = ({ color = "red-400" }: { color?: string }) => {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 0C2.34315 0 1 1.34315 1 3V13C1 14.3062 1.83481 15.4175 3 15.8293V16.5C3 17.3284 3.67157 18 4.5 18C5.32843 18 6 17.3284 6 16.5V16H12V16.5C12 17.3284 12.6716 18 13.5 18C14.3284 18 15 17.3284 15 16.5V15.8293C16.1652 15.4175 17 14.3062 17 13V3C17 1.34315 15.6569 0 14 0H4Z"
          fill={color}
        />
        <rect x="3" y="3" width="12" height="7" fill="white" />
        <rect x="3" y="12" width="3" height="2" rx="1" fill="white" />
        <rect x="12" y="12" width="3" height="2" rx="1" fill="white" />
      </svg>
    </div>
  );
};

export default BusIcon;
