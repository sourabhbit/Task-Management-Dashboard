import * as React from "react";

const PurpleTick = ({ props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <rect width={14} height={14} fill="#916CFF" rx={7} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M7.02 8.969a1.346 1.346 0 0 1-1.936 0L3.968 7.815a.696.696 0 1 1 1-.968L7.02 8.97Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.68 9.316a.876.876 0 0 1-1.26 0l-.338-.35L9.03 4.885a.696.696 0 0 1 1 .967L6.68 9.316Z"
      clipRule="evenodd"
    />
  </svg>
);
export default PurpleTick;
