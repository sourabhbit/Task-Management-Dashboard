import React from "react";
import { HeaderImageLogo } from "@/styles/CommonStyles";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/image/logo.png";
const HeaderLogo = ({
  isResponsive,
  isSideBarVisible,
  isHideMenu = false,
  onLogoClick,
}: any) => {
  return (
    <Link href={isHideMenu ? "" : "/"} aria-label="logo">
      <HeaderImageLogo>
        <Image
          src={Logo}
          alt=""
          className={isResponsive ? "" : ""}
          priority
          unoptimized
          width={50}
          height={50}
          onClick={() => {
            isResponsive && isSideBarVisible
              ? onLogoClick(!isSideBarVisible)
              : null;
          }}
          style={{ cursor: "pointer" }}
        />
      </HeaderImageLogo>
    </Link>
  );
};

export default HeaderLogo;
