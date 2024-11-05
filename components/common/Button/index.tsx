import React from "react";
import Spinner from "@/components/common/Spinner";
import { ButtonWrapper } from "./ButtonStyles";

const Button = ({ children, onClick, disabled, isLoading, style }: any) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled || isLoading}
      style={style}
      role="button"
    >
      {isLoading ? <Spinner /> : children}
    </ButtonWrapper>
  );
};

export default Button;
