import React from "react";
import { DialogButton, ToggleButtonWrapper } from "./toggleStyles";

interface ToggleProps {
  isSelected: boolean;
  handleToggleChange: (isSelected: boolean) => void;
  bgColor: string;
}
const ToggleButton = ({
  isSelected,
  handleToggleChange,
  bgColor,
}: ToggleProps) => {
  return (
    <ToggleButtonWrapper
      selected={isSelected}
      onClick={() => handleToggleChange(!isSelected)}
      bgColor={bgColor}
      data-testid="toggle-element"
    >
      <DialogButton selected={isSelected}></DialogButton>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
