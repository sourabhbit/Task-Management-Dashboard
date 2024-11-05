import React from "react";

const LinkedinIcon = ({ width, height, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      fill={color ?? "none"}
      viewBox={`0 0 ${width ?? 24} ${height ?? 24}`}
    >
      <path
        fill={color ?? "#000"}
        fillOpacity="0.6"
        d="M20.45 20.45h-3.557v-5.57c0-1.328-.023-3.037-1.85-3.037-1.851 0-2.135 1.447-2.135 2.942v5.665H9.353V8.997h3.414v1.564h.047a3.743 3.743 0 013.369-1.85c3.604 0 4.268 2.372 4.268 5.455l-.001 6.284zM5.34 7.43a2.063 2.063 0 11-.001-4.126 2.063 2.063 0 010 4.127zm1.777 13.02h-3.56V8.997h3.56V20.45zM22.222 0H1.77A1.752 1.752 0 000 1.731v20.536A1.752 1.752 0 001.77 24h20.452A1.756 1.756 0 0024 22.267V1.73A1.756 1.756 0 0022.222 0"
      ></path>
    </svg>
  );
};

export default LinkedinIcon;
