import AddTaskComponent from "@/components/DashboardComponents/AddTaskComponent";
import ListTaskComponentLikeBoard from "@/components/DashboardComponents/ListTaskComponentLikeBoard";
import ListTaskComponent from "@/components/DashboardComponents/ListTaskComponent";
import { Flex, FlexCol } from "@/styles/CommonStyles";
import {
  AddTaskButton,
  MaxWidthContainer,
  OperationWrapper,
  Width,
} from "@/styles/HomeStyles";
import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";
import ToggleButton from "@/components/common/ToggleButton";
import Input from "@/components/common/Form/input";
import localStorageHelper from "@/utils/helper";
import SimpleSelectInput, {
  DropDownTypes,
} from "@/components/common/Form/SimpleSelect/SimpleSelectInput";
import DecendingIcon from "@/components/common/Icon/DecendingIcon";
import AscendingIcon from "@/components/common/Icon/AscendingIcon";
import SecondaryButton from "@/components/common/Button/secondaryButton";
import { v4 as uuidv4 } from "uuid";

const statusOption: Array<DropDownTypes> = [
  { id: 0, value: "all", label: "All" },
  { id: 1, value: "pending", label: "Pending" },
  { id: 2, value: "inprogress", label: "In-Progress" },
  { id: 3, value: "complete", label: "Complete" },
];

export interface TaskType {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}
const Home = () => {
  const [isBoardView, setBoardView] = useState(false);
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  const [filter, setFilter] = useState({ search: "", completed: "all" });
  const [isAscending, setIsAscending] = useState(false);

  const filteredTasks = useMemo(() => {
    let filteredTasks = tasks.filter((task) => {
      // search filter
      const matchesSearch =
        task.title.toLowerCase().includes(filter.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.search.toLowerCase());

      // status filter
      const matchesCompletion =
        filter.completed === "all" ||
        (filter.completed === "complete" && task.status === "complete") ||
        (filter.completed === "inprogress" && task.status === "inprogress") ||
        (filter.completed === "pending" && task.status === "pending");

      return matchesSearch && matchesCompletion;
    });

    // sorting filter
    filteredTasks = filteredTasks.sort((taskA, taskB) => {
      const dateA = new Date(taskA.dueDate);
      const dateB = new Date(taskB.dueDate);

      return isAscending
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

    return filteredTasks;
  }, [tasks, filter, isAscending]);

  const handleSearchChange = (e: any) => {
    setFilter((prevFilter) => ({ ...prevFilter, search: e.target.value }));
  };

  const handleCompletionChange = (value: any) => {
    setFilter((prevFilter) => ({ ...prevFilter, completed: value }));
  };

  useEffect(() => {
    setTasks(localStorageHelper.getItem("tasks") || []);
  }, []);

  const handleSubmit = (formValue: any) => {
    try {
      var updatedTaskList = [...tasks, { ...formValue, id: uuidv4() }];
      setTasks(updatedTaskList);
      localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSorting = () => {
    setIsAscending(!isAscending);
  };

  const handleDelete = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (id: string, updatedTask: TaskType) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <Head>
        <title>Premji Invest</title>
      </Head>
      <Width>
        <FlexCol width="100%" alignItems="center">
          <MaxWidthContainer>
            <OperationWrapper>
              <Flex className="operationItem">
                <Input
                  type="text"
                  value={filter.search}
                  onChange={(e: any) => handleSearchChange(e)}
                  placeholder={"Search Task"}
                  error={""}
                />
              </Flex>

              <Flex className="operationItem">
                <SimpleSelectInput
                  options={statusOption}
                  onChange={(status: any) => handleCompletionChange(status)}
                  placeHolder="Select Status"
                  showCaret={true}
                  value={filter.completed}
                />
              </Flex>

              <Flex gap={10} onClick={handleSorting} className="operationItem">
                <SecondaryButton borderColor="#e4eaef">
                  Sort By Due Date
                  {isAscending ? (
                    <DecendingIcon width={18} height={18} />
                  ) : (
                    <AscendingIcon width={18} height={18} />
                  )}
                </SecondaryButton>
              </Flex>

              <Flex gap={10} className="operationItem" justifyContent="center">
                Board View
                <ToggleButton
                  isSelected={isBoardView}
                  handleToggleChange={(isSelected: boolean) => {
                    setBoardView(isSelected);
                  }}
                  bgColor="#000000"
                />
              </Flex>
              <Flex className="operationItem">
                <AddTaskComponent onSubmit={handleSubmit} />
              </Flex>
            </OperationWrapper>

            {isBoardView ? (
              <FlexCol margin="20px 0" width="100%">
                <ListTaskComponentLikeBoard tasks={filteredTasks} />
              </FlexCol>
            ) : (
              <FlexCol margin="20px 0" width="100%">
                <ListTaskComponent
                  tasks={filteredTasks}
                  handleDelete={(id: string) => handleDelete(id)}
                  handleEdit={(id: string, updatedTask: TaskType) =>
                    handleEdit(id, updatedTask)
                  }
                />
              </FlexCol>
            )}
          </MaxWidthContainer>
        </FlexCol>
      </Width>
    </>
  );
};

export default Home;
