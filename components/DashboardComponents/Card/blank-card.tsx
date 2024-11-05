import { Flex } from "@/styles/CommonStyles";
import React from "react";
import { Card } from "../ListTaskComponent/styles";

const BlankCard = () => {
  return (
    <Card>
      <Flex
        alignItems="center"
        gap={4}
        className="notask"
        justifyContent="center"
        height="100%"
      >
        No Tasks
      </Flex>
    </Card>
  );
};

export default BlankCard;
