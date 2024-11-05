import { Flex, FlexCol } from "@/styles/CommonStyles";
import React from "react";
import styled from "styled-components";

export const Tab = styled.button<{ isActive: boolean; fontSize: string }>`
  font-weight: 500;
  display: flex;
  gap: 2px;
  align-items: center;
  border: none;
  background: transparent;
  border-bottom: ${(props) => (props.isActive ? "2px solid white" : "")};
  color: white;
  opacity: ${(props) => (!props.isActive ? 0.4 : 1)};
  padding: 0 0 10px 0;
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
`;

export const TabNavBar = styled.div`
  display: flex;
  gap: 30px;
  align-items: end;
  position: relative;
  width: fit-content;
  &::before {
    position: absolute;
    right: 0;
    left: 0;
    border-bottom: 1px solid #f0f0f0;
    content: "";
  }
  @media screen and (max-width: 961px) {
    gap: 12px;
  }
`;

export const AnimatedBar = styled.div``;
const Tabs = ({ items, onChange, activeKey, fontSize, isResponsive }: any) => {
  return (
    <>
      <FlexCol style={{ padding: isResponsive ? "" : "60px 60px" }}>
        <TabNavBar>
          {items.map((item: any, index: number) => (
            <Tab
              onClick={() => onChange(index + 1)}
              isActive={activeKey === index + 1}
              fontSize={fontSize}
              key={index}
            >
              {item.label}
            </Tab>
          ))}
        </TabNavBar>

        <Flex>{items[activeKey - 1].children}</Flex>
      </FlexCol>
    </>
  );
};

export default Tabs;
