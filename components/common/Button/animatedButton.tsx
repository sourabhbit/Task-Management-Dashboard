import React from "react";
import Spinner from "@/components/common/Spinner";
import { AnimatedButtonWrapper } from "./ButtonStyles";

const AnimatedButton = ({
  children,
  onClick,
  disabled,
  isLoading,
  onkeyDown,
  style,
}: any) => {
  return (
    <AnimatedButtonWrapper
      onClick={onClick}
      onKeyDown={onkeyDown}
      disabled={isLoading}
      style={style}
      role="button"
    >
      {isLoading ? <Spinner /> : children}
    </AnimatedButtonWrapper>
  );
};

export default AnimatedButton;
