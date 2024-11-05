import React from "react";
import Spinner from "@/components/common/Spinner";
import { SecondaryButtonWrapper } from "./ButtonStyles";

const SecondaryButton = ({
  children,
  onClick,
  disabled,
  isLoading,
  borderColor,
  color,
  width,
}: any) => {
  return (
    <SecondaryButtonWrapper
      onClick={onClick}
      disabled={disabled}
      borderColor={borderColor}
      color={color}
      width={width}
    >
      {isLoading ? <Spinner /> : children}
    </SecondaryButtonWrapper>
  );
};

export default SecondaryButton;
