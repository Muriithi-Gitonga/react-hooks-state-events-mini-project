import React, { useState } from "react";

function CategoryFilter({ categories, filteredTasks }) {
  return (
    <div className="categories">
      <h5>Category filters </h5>
      {categories.map((category, index) => {
        return (
          <button onClick={(e) => filteredTasks(category, e)} key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
