import React, { useState } from "react";
import Task from "./Task";
import Search from "./searchFilter";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTask] = useState([
    {
      description: "Research",
      assignee: "John",
      status: "pending",
      deadline: "August 1, 2024",
    },
    {
      description: "Develop",
      assignee: "Mia",
      status: "completed",
      deadline: "August 2, 2024",
    },
    {
      description: "Test",
      assignee: "Oliver",
      status: "pending",
      deadline: "August 3, 2024",
    },
    {
      description: "Deploy",
      assignee: "Sophia",
      status: "completed",
      deadline: "August 4, 2024",
    },
    {
      description: "Document",
      assignee: "Liam",
      status: "pending",
      deadline: "August 5, 2024",
    },
    {
      description: "Promote",
      assignee: "Emma",
      status: "pending",
      deadline: "August 6, 2024",
    },
    {
      description: "Optimize",
      assignee: "Noah",
      status: "completed",
      deadline: "August 7, 2024",
    },
    {
      description: "Integrate",
      assignee: "Ava",
      status: "pending",
      deadline: "August 8, 2024",
    },
    {
      description: "Launch",
      assignee: "William",
      status: "pending",
      deadline: "August 9, 2024",
    },
    {
      description: "Evaluate",
      assignee: "Isabella",
      status: "completed",
      deadline: "August 10, 2024",
    },
  ]);
  const [filteredTasks, sFilteredTask] = useState(tasks);

  const Status = (index) => {
    const Tsks = [...tasks];
    Tsks[index].status =
      Tsks[index].status === "pending" ? "completed" : "pending";
    setTask(Tsks);
    sFilteredTask(Tsks);
  };
  return (
    <div className="container">
      <h2>Task List</h2>
      <Search tasks={tasks} setFilteredTasks={sFilteredTask} />
      <ul>
        <li className="header">
          <span>No.</span>
          <span>Description</span>
          <span>Assignee</span>
          <span>Deadline</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task key={index} index={index} task={task} Status={Status} />
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
