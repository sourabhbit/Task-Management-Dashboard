import styled from "styled-components";
import { FlexCol } from "@/styles/CommonStyles";

export const PageNotFoundWrapper = styled(FlexCol)`
  align-items: center;
  justify-content: center;
  height: 90vh;
  gap: 20px;
  padding: 0 25px 0 25px;
`;

export const PageNotFoundText = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
`;

export const PageNotFoundImage = styled.div`
  img {
    width: 600px;
    height: 100%;
  }
  @media screen and (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;
