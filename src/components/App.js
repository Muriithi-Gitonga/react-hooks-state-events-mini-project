import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState(TASKS);
  const [categories, setCat] = useState(CATEGORIES);

  function filteredTasks(category, event) {
    event.currentTarget.classList.add("selected");

    if (category === "All") {
      setTask(TASKS);
      return;
    }

    const newTask = TASKS.filter((item) => item.category === category);
    console.log(newTask);
    setTask((tasks) => newTask);
  }

  function handleDelete(text) {
    const updatedTask = TASKS.filter((task) => text !== task.text);

    setTask((tasks) => updatedTask);
  }
  function handleTask(newTask) {
    setTask((tasks) => [...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filteredTasks={filteredTasks} />
      <NewTaskForm
        categories={categories.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTask}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
