import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import { FlexCol } from "@/styles/CommonStyles";

const inMobileAnimation = keyframes`${slideInRight}`;

export const MobileContent = styled.div`
  min-height: calc(100vh - 8vh);
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  animation: 0.5s ${inMobileAnimation};
`;

export const LogoutWrapper = styled(FlexCol)`
  gap: 20px;
  .logoutText {
    font-size: 18px;
    font-weight: 500;
  }
  @media screen and (max-width: 471px) {
    padding: 0 20px 20px 20px;
  }
  button {
    font-size: 16px;
  }
`;
