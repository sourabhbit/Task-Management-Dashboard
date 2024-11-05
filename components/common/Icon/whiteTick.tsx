import * as React from "react";
const WhiteTick = ({ width, height }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 19}
    height={height ?? 15}
    fill="none"
    viewBox={`0 0 ${width ?? 19} ${height ?? 15}`}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9.425 12.323a3.605 3.605 0 01-5.183 0l-2.99-3.09a1.863 1.863 0 112.679-2.59l5.494 5.68z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.504 13.252a2.346 2.346 0 01-3.373 0l-.904-.936L14.799 1.384a1.863 1.863 0 012.678 2.59l-8.973 9.278z"
      clipRule="evenodd"
    ></path>
  </svg>
);
export default WhiteTick;
