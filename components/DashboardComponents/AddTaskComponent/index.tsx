import Button from "@/components/common/Button";
import Input from "@/components/common/Form/input";
import SimpleSelectInput, {
  DropDownTypes,
} from "@/components/common/Form/SimpleSelect/SimpleSelectInput";
import RenderModalOrBottomSheet from "@/components/common/RenderModalBS";
import { FlexCol } from "@/styles/CommonStyles";
import React, { useState } from "react";

const statusOption: Array<DropDownTypes> = [
  { id: 1, value: "pending", label: "Pending" },
  { id: 2, value: "inprogress", label: "In-Progress" },
  { id: 3, value: "complete", label: "Complete" },
];

const AddTaskComponent = ({ onSubmit }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });

  const validateForm = () => {
    const errors: any = {};
    let isValid = true;

    if (!formValue.title) {
      errors.title = "Title is required";
      isValid = false;
    }

    if (!formValue.dueDate) {
      errors.dueDate = "Due date is required";
      isValid = false;
    } else if (new Date(formValue.dueDate) < new Date()) {
      errors.dueDate = "Due date cannot be in the past";
      isValid = false;
    }

    if (!formValue.status) {
      errors.status = "Status is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleAddTask = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    try {
      if (validateForm()) {
        onSubmit(formValue);
        resetFormValue();
        setShowModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resetFormValue = () => {
    setFormValue({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    });
    setFormErrors({
      title: "",
      description: "",
      dueDate: "",
      status: "",
    });
  };

  return (
    <>
      <Button onClick={handleAddTask}>Add Task</Button>
      <RenderModalOrBottomSheet
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          resetFormValue();
        }}
        modalWidth="600px"
        title="Add Task"
      >
        <FlexCol gap={20} margin="20px 0">
          <Input
            placeholder={"Title"}
            type={""}
            error={formErrors.title}
            title="Task Title"
            onChange={(e: any) => {
              setFormValue({ ...formValue, title: e.target.value });
              setFormErrors({ ...formErrors, title: "" });
            }}
            value={formValue.title}
          />
          <Input
            placeholder={"Description"}
            type={""}
            error={formErrors.description}
            title="Task Description"
            onChange={(e: any) =>
              setFormValue({ ...formValue, description: e.target.value })
            }
            value={formValue.description}
          />
          <SimpleSelectInput
            title="Status"
            options={statusOption}
            onChange={(status: any) => setFormValue({ ...formValue, status })}
            placeHolder="Select Status"
            showCaret={true}
            value={formValue.status}
            error={formErrors.status}
          />
          <Input
            value={formValue.dueDate}
            error={formErrors.dueDate}
            placeholder={"Due Date"}
            title="Due Date"
            type={"date"}
            onChange={(e: any) => {
              setFormValue({ ...formValue, dueDate: e.target.value });
              setFormErrors({ ...formErrors, dueDate: "" });
            }}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </FlexCol>
      </RenderModalOrBottomSheet>
    </>
  );
};

export default AddTaskComponent;
