import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter({
  category,
  selectedCategory,
  setSelectedCategory,
  tasks,
  taskData,
}) {
  function handleCategory(category) {
    setSelectedCategory(category);
    const filteredTasks =
      category === "All"
        ? TASKS
        : tasks.filter((task) => {
            return task.category === category;
          });
    taskData(filteredTasks);
  }

  // // const categoryButtons = category.map((eachCategory) => {
  // //   const className = eachCategory===selectedCategory ? 'selected' : null
  // //   return (
  // //     <button className={className} onClick={() => handleCategory(eachCategory)} key={eachCategory}>{eachCategory}</button>
  // //   )
  // })

  return (
    <div className="categories">
      <h5>Category filters </h5>
      {CATEGORIES.map((cat) => {
        const className = cat === selectedCategory ? "selected" : null;
        return (
          <button
            className={className}
            onClick={() => handleCategory(cat)}
            key={cat}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
