import React from "react";

const Arrow = ({ color, width, height }: any) => {
  return (
    <svg
      width={width || "16px"}
      height={height || "16px"}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.94417 0.373474L17.2534 7.49997L9.94417 14.6265L8.7225 13.3735L13.8492 8.37497H0L0 6.62497L13.8492 6.62497L8.7225 1.62647L9.94417 0.373474Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default Arrow;
