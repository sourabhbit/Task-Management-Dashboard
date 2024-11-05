import { Flex, FlexCol } from "@/styles/CommonStyles";
import React from "react";
import { Card } from "../ListTaskComponent/styles";
import Calendar from "@/components/common/Icon/Calendar";

const TaskCard = ({ task }: any) => {
  return (
    <Card>
      <FlexCol gap={15}>
        <p className="title">{task.title}</p>
        <p className="description">{task.description}</p>
      </FlexCol>
      <Flex alignItems="center" gap={4} className="due">
        <Calendar color="#fff" /> Due: {task.dueDate}
      </Flex>
    </Card>
  );
};

export default TaskCard;
