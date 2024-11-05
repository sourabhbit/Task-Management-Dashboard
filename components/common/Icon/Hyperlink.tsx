import React from "react";

function Hyperlink({ color, width, height, style, opacity }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "12px"}
      height={height || "12px"}
      fill={color ?? "none"}
      viewBox="0 0 12 12"
      style={style}
    >
      <path
        fill={color ?? "#000"}
        fillOpacity={opacity}
        d="M2.13 0v1.425L9.584 1.4 0 10.963 1.013 12l9.584-9.538v7.36H12V0H2.13z"
      ></path>
    </svg>
  );
}

export default Hyperlink;
