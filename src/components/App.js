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
  const [categories, setCat] = useState(CATEGORIES)
  const [selectedCategories, setSelectedCategory] = useState("");
  
  
  function filteredTasks (tasks) {
    setTask(tasks)
  }


  function handleDelete(text) {
    const updatedTask = tasks.filter((task) => text !== task.text);
    
    setTask((tasks) => updatedTask)
  console.log(tasks);
}
  function handleTask (newTask) {
    setTask([...tasks, newTask])
  }

  function handleCategory (newCat) {
    setCat([...categories, newCat])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        category={CATEGORIES}
        selectedCategory={selectedCategories}
        setSelectedCategory={setSelectedCategory}
        taskData={filteredTasks}
        tasks={tasks}
        
      />
      <NewTaskForm category={categories.filter((newCategory) => newCategory !== 'All')} handleTask={handleTask} handleCategory={handleCategory}/>
      <TaskList tasks={tasks}   handleDelete={handleDelete} />
    </div>
  );
}

export default App
