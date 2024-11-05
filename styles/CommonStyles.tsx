import styled from "styled-components";

export const Title4 = styled.h4<{
  color?: string;
  fontWeight?: string;
  fontSize?: string;
}>`
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || "#0f1623"};
  font-family: var(--font);
`;

export const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  textAlign?: string;
  flexWrap?: string;
  gap?: number;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  text-align: ${(props) => props.textAlign || "unset"};
  flex-wrap: ${(props) => props.flexWrap || "unset"};
  gap: ${(props) => props.gap + "px"};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;

export const FlexCol = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: number;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  textAlign?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  text-align: ${(props) => props.textAlign || "unset"};
  flex-wrap: ${(props) => props.flexWrap || "unset"};
  gap: ${(props) => (props.gap ? props.gap + "px" : "none")};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const IconWrapper = styled.div<{
  width?: string;
  height?: string;
  border?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "48px "};
  height: ${(props) => props.height || "48px "};
  border: ${(props) => props.border || "1px solid #e4eaef"};
  border-radius: 50%;
  /* padding:10px 15px; */
  cursor: pointer;
`;

export const Overlay = styled.div`
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.5;
  background-color: var(--eerie-black-primary);
  z-index: 9998;
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const HeaderImageLogo = styled(Flex)`
  img {
    height: 100%;
  }
  @media screen and (max-width: 961px) {
    img {
      width: 40px;
      height: 100%;
    }
  }
`;
