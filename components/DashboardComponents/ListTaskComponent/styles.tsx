import { Flex, FlexCol } from "@/styles/CommonStyles";
import styled from "styled-components";

export const TaskContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;
export const TaskSubContainer = styled(FlexCol)`
  padding: 20px;
  border: 1px dashed #00000066;
  border-radius: 8px;
  gap: 25px;
  flex-grow: 1;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const CardContainer = styled(FlexCol)`
  @media screen and (max-width: 680px) {
    flex-direction: row;
    overflow: scroll;
    padding: 0 0 20px 0;
  }
`;
export const PendingTaskHeader = styled(Flex)`
  padding: 5px 10px;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  background: #fc4a1a;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  font-size: 12px;
`;

export const InProgressTaskHeader = styled(Flex)`
  padding: 5px 10px;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  background: #fc4a1a;
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  font-size: 12px;
`;

export const CompleteTaskHeader = styled(Flex)`
  padding: 5px 10px;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  background: #11998e;
  background: linear-gradient(to right, #1d976c, #93f9b9);
  font-size: 12px;
`;

export const Card = styled(FlexCol)`
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;
  min-width: 250px;
  width: 250px;
  min-height: 250px;
  background: linear-gradient(to right, #000000, #434343);
  border-radius: 12px;
  color: white;

  .title {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1.25px;
  }
  .description {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .due {
    font-size: 12px;
  }
  .notask {
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (max-width: 481px) {
    width: 100%;
  }
`;

export const ActionButton = styled(Flex)`
  cursor: pointer;
`;
