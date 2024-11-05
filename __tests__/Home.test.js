import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/index";
import { v4 as uuidv4 } from "uuid";
import localStorageHelper from "../utils/helper";
import "@testing-library/jest-dom";

jest.mock("../utils/helper");

describe("Home Component", () => {
  const mockTasks = [
    {
      id: uuidv4(),
      title: "Task 1",
      description: "Task description",
      dueDate: "2024-11-10",
      status: "pending",
    },
    {
      id: uuidv4(),
      title: "Task 2",
      description: "Another task description",
      dueDate: "2024-11-12",
      status: "inprogress",
    },
    {
      id: uuidv4(),
      title: "Task 3",
      description: "Completed task",
      dueDate: "2024-11-14",
      status: "complete",
    },
  ];

  beforeEach(() => {
    // Mock the localStorage helper
    localStorageHelper.getItem = jest.fn().mockReturnValue(mockTasks);
  });

  test("renders Home page correctly", async () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("Search Task")).toBeInTheDocument(); // Check the input for search task
    expect(screen.getByText("Sort By Due Date")).toBeInTheDocument(); // Check for Sort button
    expect(screen.getByText("Board View")).toBeInTheDocument(); // Check for Board View toggle
  });

  test("handles search input and filters tasks", async () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Search Task");
    fireEvent.change(searchInput, { target: { value: "Task 1" } });

    expect(screen.getByDisplayValue("Task 1")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Task 3")).not.toBeInTheDocument();
  });

  test("handles status filter change", async () => {
    render(<Home />);

    const select = screen.getByTestId("select-element");
    fireEvent.change(select, { target: { value: "inprogress" } });

    // Ensure the tasks are filtered based on the selected status
    expect(screen.getByText("Task 2")).toBeInTheDocument(); // Task 2 should be visible
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument(); // Task 1 should be hidden
    expect(screen.queryByText("Task 3")).not.toBeInTheDocument(); // Task 3 should be hidden
  });

  test("sorts tasks based on due date", async () => {
    render(<Home />);

    const sortButton = screen.getByText("Sort By Due Date");
    fireEvent.click(sortButton); // Sort in ascending order first

    // Ensure the tasks are sorted by the due date
    const sortedTasks = await screen.findAllByText(/Task \d+/); // The task titles
    expect(sortedTasks[0].textContent).toBe("Task 1");
    expect(sortedTasks[1].textContent).toBe("Task 2");
    expect(sortedTasks[2].textContent).toBe("Task 3");
  });
});
