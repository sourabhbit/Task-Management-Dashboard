import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
const inMobileAnimation = keyframes`${zoomIn}`;
interface Props {
  isVisible: boolean;
}

export const ModalWrapper = styled.div<Pick<Props, "isVisible">>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0;
  z-index: 9999;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalTitle = styled.div`
  font-size: 20px;
  color: var(--text-color-black);
  font-weight: var(--fw-md);
`;

export const ModalImageWrapper = styled.button<{
  width?: string;
  height?: string;
}>`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ModalContent = styled.div<{
  width?: string;
  isNonPadding?: boolean;
  bgColor?: string;
  minHeight?: string;
}>`
  animation: 0.5s ${inMobileAnimation};
  overflow-y: scroll;
  background: ${(props) => (props.bgColor ? props.bgColor : `var(--white)`)};
  width: ${(props) => props.width || "392px"};
  min-width: 392px;
  min-height: ${(props) => props.minHeight || "220px"};
  max-height: 80%;
  /* height: auto; */
  top: var(--top-50);
  left: var(--left-50);
  padding: ${(props) => (props.isNonPadding ? "" : "32px")};
  border-radius: var(--border-radius-sm);
`;

export const Overlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  cursor: pointer;
`;

export const CloseButton = styled.button``;
