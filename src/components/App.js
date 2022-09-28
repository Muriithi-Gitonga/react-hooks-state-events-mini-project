import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS);
  const [onecategory, setCategory] = useState("All");
  
  const filteredTasks = tasks.filter(
    (task) => onecategory ===  "All" || task.category === onecategory
  );

  function handleDelete(text) {
    const updatedTask = tasks.filter((task) => text !== task.text);
    
    setTask(updatedTask)
  console.log(tasks);
}
  function handleTask (newTask) {
    setTask([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        category={CATEGORIES}
        selectedCategory={onecategory}
        handleCategory={setCategory}
      />
      <NewTaskForm category={CATEGORIES.filter((newCategory) => newCategory !== 'All')} handleTask={handleTask}/>
      <TaskList taskData={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App
