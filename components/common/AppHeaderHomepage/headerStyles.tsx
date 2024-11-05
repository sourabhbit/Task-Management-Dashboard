import styled from "styled-components";
import { FlexCol } from "../../../styles/CommonStyles";

export const FixedHeaderWrapper = styled(FlexCol)<{
  isMobile: boolean;
}>`
  background-color: transparent;
  width: 100vw;
  height: 100px;
  z-index: 9996;
  hr {
    margin: 0;
    padding: 0;
    height: 2px;
    background: #ffffff33;
    border: none;
    width: 100%;
  }
  @media screen and (max-width: 961px) {
    height: 8vh;
  }
  @media screen and (max-width: 961px) and (orientation: landscape) {
    height: 15vh;
  }
  @media screen and (max-width: 471px) {
    hr {
      height: 1px;
    }
  }
`;
export const HeaderWrapper = styled.header<{
  isResponsive: boolean;
  isMobile: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.isResponsive ? "0px 20px" : "0px 10px")};
  gap: 8px;
  height: inherit;
  width: 100%;
  max-width: 1366px;
  box-sizing: border-box;
  z-index: 5;
  background: transparent;
  border-bottom: 1px solid transparent;
  box-shadow: 0 1px 0 0 #dde0e4;
  .logo {
    width: 133.62px;
    height: 19px;
  }
`;
