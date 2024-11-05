import React from "react";

function CustomStar({ width, height, color }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 14}
      height={height ?? 14}
      fill={color ?? "none"}
      viewBox={"0 0 14 14"}
    >
      <path
        fill={color ?? "#000"}
        d="M.246 6.673C4.492 5.453 5.453 4.492 6.673.246a.34.34 0 01.654 0c1.22 4.246 2.18 5.207 6.427 6.427a.34.34 0 010 .653c-4.246 1.221-5.207 2.182-6.427 6.428a.34.34 0 01-.654 0C5.453 9.508 4.492 8.547.246 7.326a.34.34 0 010-.653z"
      ></path>
    </svg>
  );
}

export default CustomStar;
