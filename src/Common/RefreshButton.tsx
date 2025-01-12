import React from "react";

const RefreshButton = ({
  onClick,
  color = "red-400",
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  color?: string;
}) => {
  return (
    <div onClick={onClick} className={`text-${color}`}>
      <svg
        stroke="currentColor"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.03037 18.9696C3.43429 15.3735 3.43429 9.54314 7.03037 5.94706C9.30362 3.67381 12.4697 2.83759 15.3998 3.43839M20.9651 7.00777C23.6177 10.6111 23.3137 15.7089 20.0529 18.9696C17.7072 21.3153 14.4107 22.1309 11.4039 21.4164M19.1408 8.48774V5.03462L22.5939 5.03462L19.1408 8.48774ZM7.84369 16.3303V19.7835H4.39057L7.84369 16.3303Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default RefreshButton;
