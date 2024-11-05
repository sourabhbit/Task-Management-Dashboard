import Image from "next/image";
import React from "react";
import stableMoneyIcon from "@/image/stableMoneyIcon.svg";
import { LogoWrapper, Wrapper } from "./loadingStyles";
const Loading = () => {
  return (
    <Wrapper>
      {/* <div className="spinner-border" role="status"></div> */}
      <LogoWrapper>
        <Image src={stableMoneyIcon} alt="" priority />
      </LogoWrapper>
    </Wrapper>
  );
};

export default Loading;
