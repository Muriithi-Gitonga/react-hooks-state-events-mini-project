import React from "react";
import Task from "./Task";

function TaskList({ taskData, handleDelete }) {
  return (
    <div className="tasks">
      {taskData.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
