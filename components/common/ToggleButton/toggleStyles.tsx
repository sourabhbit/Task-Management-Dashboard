import styled from "styled-components";

export const ToggleButtonWrapper = styled.div<{
  selected: boolean;
  bgColor: string;
}>`
  width: 36px;
  background: ${(props) => (props.selected ? props.bgColor : "#0000004D")};
  cursor: pointer;
  user-select: none;
  border-radius: 12px;
  padding: 3px 2px;
  height: 20px;
  position: relative;
`;
export const DialogButton = styled.div<{ selected: boolean }>`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #ffffff;
  color: white;
  padding: 3px;
  min-width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: ${(props) => (props.selected ? "18px" : "4px")};
  transition: all 0.3s ease;
  height: 14px;
`;
