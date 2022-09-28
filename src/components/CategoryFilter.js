import React from "react";

function CategoryFilter({category, selectedCategory, handleCategory}) {
  const categoryButtons = category.map((eachCategory) => {
    const className = eachCategory===selectedCategory ? 'selected' : null
    return (
      <button className={className} onClick={() => handleCategory(eachCategory)} key={eachCategory}>
        {eachCategory}

      </button>
    )
  })
 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
