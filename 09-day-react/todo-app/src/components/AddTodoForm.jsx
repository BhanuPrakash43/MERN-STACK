import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  // onSubmit ==> Form event

  function handleSubmit(e) {
    // prevent change to refresh
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }
  const addButtonStyles = {
    marginLeft: "3rem",
  };

  // handleSubmit call on ---> Add button click / Enter hit
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        placeholder="Type new todo here.."
        value={title}
        onChange={handleChange}
      />
      <button type="submit" style={addButtonStyles}>
        Add Todo
      </button>
    </form>
  );
}
export default AddTodoForm;
