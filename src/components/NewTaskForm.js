import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({category, handleTask, handleCategory}) {
  const [newForm, setNewForm] = useState({text:"", category:"code"})
 

  function handleSubmit (e) {
    e.preventDefault()
    handleTask(newForm)
    handleCategory(newForm.category)
    setNewForm({text:"", category:"code"})
    
   
  }
  console.log(category)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setNewForm((form) => ({...form, text:e.target.value})  )}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setNewForm((form) => ({...form, category:e.target.value})  )}>
          {CATEGORIES.map((cat) => (<option value={cat} key={cat}>{cat}</option>))}

          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>

  );
}

export default NewTaskForm;
