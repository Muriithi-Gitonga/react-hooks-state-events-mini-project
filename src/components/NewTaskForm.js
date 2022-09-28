import React, { useState } from "react";

function NewTaskForm({category, handleTask}) {
  const [text, setText] = useState("")
  const [newCat, setCategory] = useState("Money")

  function handleSubmit (e) {
    e.preventDefault()
    const formObj = {
      text: text,
      category:newCat

    }
    setText("")
    setCategory("")
    handleTask(formObj)
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onBlur={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onBlur={(e) => setCategory(e.target.value)}>
          {category.map((cat) => (<option key={cat}>{cat}</option>))}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>

  );
}

export default NewTaskForm;
