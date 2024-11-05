import React from "react";
import Spinner from "@/components/common/Spinner";
import { ErrorButtonWrapper } from "./ButtonStyles";

const ErrorButton = ({ children, onClick, disabled, isLoading }: any) => {
  return (
    <ErrorButtonWrapper onClick={onClick} disabled={disabled}>
      {isLoading ? <Spinner /> : children}
    </ErrorButtonWrapper>
  );
};

export default ErrorButton;
