import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newForm, setNewForm] = useState({ text: "", category: "code" });

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newForm);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) =>
            setNewForm((newForm) => ({ ...newForm, text: e.target.value }))
          }
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) =>
            setNewForm((newForm) => ({ ...newForm, category: e.target.value }))
          }
        >
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
