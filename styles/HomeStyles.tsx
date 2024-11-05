import styled from "styled-components";
import { Flex } from "./CommonStyles";

export const Container = styled.div<{ isResponsive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export const MaxWidthContainer = styled(Container)<{
  bgImage?: string;
  isNonPadding?: boolean;
}>`
  max-width: 1150px;
  width: 100vw;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : null};
  background-repeat: ${(props) => (props.bgImage ? "no-repeat" : "")};
  background-size: ${(props) => (props.bgImage ? "cover" : "")};
  padding: ${(props) =>
    props.isResponsive
      ? "0 24px 0 24px"
      : props.isNonPadding
      ? ""
      : "0 24px 0 24px"};
`;

export const Width = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff !important;
`;

export const Title4 = styled.h4<{
  marginTop?: string;
  marginBottom?: string;
  isResponsive?: boolean;
}>`
  font-weight: 700;
  font-size: ${(props) => (props.isResponsive ? "15px" : "20px")};
  color: #0f1623;
  font-family: var(--font);
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "px" : 0)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : 0};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
  gap: 32px;
  /* width: 767px; */
  background: #ffffff;
  border: 1.5px solid #e4eaef;
  border-radius: 12px;
`;

export const ErrorText = styled.p`
  display: block;
  font-weight: 500;
  font-size: 12px;
  font-family: var(--font);
  color: var(--fire-opal-error);
`;

export const OperationWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;
  .operationItem {
    flex-grow: 1;
    button {
      padding: 2px 5px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 680px) {
    .operationItem {
      width: 48%;
      button {
        padding: 2px 5px;
        font-size: 12px;
      }
    }
  }
`;

export const AddTaskButton = styled(Flex)`
  /* position: fixed;
  top: 4px;
  right: 10px;
  z-index: 99999; */
`;
