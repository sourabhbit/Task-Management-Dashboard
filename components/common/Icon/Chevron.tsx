import React from "react";

const Chevron = ({ color, width, height, style }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "16px"}
      height={height || "16px"}
      viewBox="0 0 24 24"
      className="chevron"
      style={style}
    >
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    </svg>
  );
};

export default Chevron;
