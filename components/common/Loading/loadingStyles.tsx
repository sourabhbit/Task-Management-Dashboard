import styled, { keyframes } from "styled-components";

const zoomInzoomOut = keyframes`
 0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
`;

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  animation: ${zoomInzoomOut} 1s ease infinite;
`;
