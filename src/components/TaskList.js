import React from "react";
import Task from "./Task";

function TaskList({ handleDelete, tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
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
