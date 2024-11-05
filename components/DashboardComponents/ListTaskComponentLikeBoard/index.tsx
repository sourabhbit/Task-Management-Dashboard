"use client";
import React from "react";
import {
  Card,
  CardContainer,
  TaskSubContainer,
  PendingTaskHeader,
  InProgressTaskHeader,
  CompleteTaskHeader,
  TaskContainer,
} from "./styles";
import TaskCard from "../Card";
import { TaskType } from "pages";
import { isArrayNotNullAndEmpty } from "@/utils/stringArrayValidators";
import BlankCard from "../Card/blank-card";

interface ListTaskComponentTypes {
  tasks: Array<TaskType>;
}

const ListTaskComponentLikeBoard = ({ tasks }: ListTaskComponentTypes) => {
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inprogressTasks = tasks.filter((task) => task.status === "inprogress");
  const completedTasks = tasks.filter((task) => task.status === "complete");
  return (
    <>
      <TaskContainer gap={30} justifyContent="center">
        <TaskSubContainer>
          <PendingTaskHeader>Pending</PendingTaskHeader>
          <CardContainer gap={10}>
            {isArrayNotNullAndEmpty(pendingTasks) ? (
              pendingTasks.map((item: any, index: any) => {
                {
                  if (item.status === "pending") {
                    return <TaskCard task={item} key={index} />;
                  }
                }
              })
            ) : (
              <BlankCard />
            )}
          </CardContainer>
        </TaskSubContainer>
        <TaskSubContainer>
          <InProgressTaskHeader>In Progress</InProgressTaskHeader>
          <CardContainer gap={10}>
            {isArrayNotNullAndEmpty(inprogressTasks) ? (
              inprogressTasks.map((item: any, index: any) => {
                {
                  if (item.status === "inprogress") {
                    return <TaskCard task={item} key={index} />;
                  }
                }
              })
            ) : (
              <BlankCard />
            )}
          </CardContainer>
        </TaskSubContainer>
        <TaskSubContainer>
          <CompleteTaskHeader>Complete</CompleteTaskHeader>
          <CardContainer gap={10}>
            {isArrayNotNullAndEmpty(completedTasks) ? (
              completedTasks.map((item: any, index: any) => {
                {
                  if (item.status === "complete") {
                    return <TaskCard task={item} key={index} />;
                  }
                }
              })
            ) : (
              <BlankCard />
            )}
          </CardContainer>
        </TaskSubContainer>
      </TaskContainer>
    </>
  );
};

export default ListTaskComponentLikeBoard;
