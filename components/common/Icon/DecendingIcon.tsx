import * as React from "react";
const DecendingIcon = ({ color, width, height, style }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={width}
    height={height}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m144 87.994 40-40 39.999 39.993M184 143.994v-96"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M48 127.994h71.999M48 63.994h55.999M48 191.994h135.999"
    />
  </svg>
);
export default DecendingIcon;
