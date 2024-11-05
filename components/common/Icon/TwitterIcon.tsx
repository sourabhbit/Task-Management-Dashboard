import React from "react";

const TwitterIcon = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      fill="none"
      viewBox={`0 0 ${width ?? 24} ${height ?? 24}`}
    >
      <path
        fill="#000"
        fillOpacity="0.6"
        stroke="#fff"
        strokeWidth="0.5"
        d="M10.603 15.104L4.043 22.6H1.02l8.237-9.416.135-.154-.124-.163L.506 1.406h6.963l5.166 6.832.185.245.202-.231 5.991-6.846h3.018l-7.68 8.775-.133.153.123.162 9.156 12.105h-6.779l-5.729-7.485-.185-.242-.201.23zm6.805 5.698l.075.098h2.665l-.303-.4L6.681 3.09l-.075-.099H3.786l.307.402 13.315 17.408z"
      ></path>
    </svg>
  );
};

export default TwitterIcon;
