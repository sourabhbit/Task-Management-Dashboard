"use client";
import React, { useState } from "react";
import {
  ActionButton,
  Card,
  CompleteTaskHeader,
  InProgressTaskHeader,
  PendingTaskHeader,
  TaskContainer,
} from "./styles";
import Calendar from "@/components/common/Icon/Calendar";
import { Flex, FlexCol } from "@/styles/CommonStyles";
import EditIcon from "@/components/common/Icon/EditIcon";
import DeleteIcon from "@/components/common/Icon/DeleteIcon";
import { TaskType } from "pages";
import RenderModalOrBottomSheet from "@/components/common/RenderModalBS";
import EditTaskComponent from "../EditTaskComponent";
import Button from "@/components/common/Button";
import SecondaryButton from "@/components/common/Button/secondaryButton";

interface ListTaskComponentTypes {
  tasks: Array<TaskType>;
  handleDelete: (id: string) => void;
  handleEdit: (id: string, updatedTask: TaskType) => void;
}

const ListTaskComponent = ({
  tasks,
  handleDelete,
  handleEdit,
}: ListTaskComponentTypes) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [task, setTask] = useState<TaskType>({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });
  const handleEditClick = (id: string) => {
    var filteredTask = tasks.find((item) => item.id === id)!;
    setTask(filteredTask);
    setShowModal(true);
  };

  const handleDeleteClick = (id: string) => {
    var filteredTask = tasks.find((item) => item.id === id)!;
    setTask(filteredTask);
    setShowConfirmationModal(true);
  };

  const confirmDelete = () => {
    if (task) {
      handleDelete(task.id);
      setShowConfirmationModal(false);
    }
  };
  return (
    <>
      <TaskContainer gap={30} justifyContent="center" margin="20px 0">
        {tasks.map((item: any, index: any) => {
          return (
            <Card key={index}>
              <FlexCol gap={15}>
                <Flex justifyContent="space-between">
                  {item.status === "pending" && (
                    <PendingTaskHeader>Pending</PendingTaskHeader>
                  )}
                  {item.status === "inprogress" && (
                    <InProgressTaskHeader>In progress</InProgressTaskHeader>
                  )}
                  {item.status === "complete" && (
                    <CompleteTaskHeader>Completed</CompleteTaskHeader>
                  )}
                  <Flex gap={10}>
                    <ActionButton onClick={() => handleEditClick(item.id)}>
                      <EditIcon width={16} height={16} color="#fff" />
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteClick(item.id)}>
                      <DeleteIcon width={18} height={18} color="#fff" />
                    </ActionButton>
                  </Flex>
                </Flex>

                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
              </FlexCol>
              <Flex alignItems="center" gap={4} className="due">
                <Calendar color="#fff" /> Due: {item.dueDate}
              </Flex>
            </Card>
          );
        })}
      </TaskContainer>

      <RenderModalOrBottomSheet
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        modalWidth="600px"
        title="Edit Task"
      >
        <EditTaskComponent
          task={task}
          onSubmit={(id, updatedTask) => {
            handleEdit(id, updatedTask);
            setShowModal(false);
          }}
        />
      </RenderModalOrBottomSheet>

      <RenderModalOrBottomSheet
        isVisible={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        modalWidth="600px"
        title="Do you really want to delete this task?"
      >
        <Flex>
          <FlexCol width="100%" gap={25} padding="20px 0">
            <p>You won&apos;t be able to retrieve it back.</p>
            <Flex gap={10}>
              <Button onClick={confirmDelete}>Yes</Button>
              <SecondaryButton
                borderColor="#000"
                onClick={() => setShowConfirmationModal(false)}
              >
                No
              </SecondaryButton>
            </Flex>
          </FlexCol>
        </Flex>
      </RenderModalOrBottomSheet>
    </>
  );
};

export default ListTaskComponent;
