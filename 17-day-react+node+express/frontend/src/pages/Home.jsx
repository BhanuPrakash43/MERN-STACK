import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoForm from "../components/AddTodoForm";
// tomorrow will finish this todos app

// blog app express js
// authentication
// frontend

function Home() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    console.log("fetch todos");
    const response = await axios.get("http://localhost:8000/api/v1/todos");
    const data = response.data;
    console.log(data);
    setTodos(data);
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  
  async function handleDelete(id) {
    console.log("inside handleDelete", id);
    const deleteUrl = `http://localhost:8000/api/v1/todos/${id}`;
    try {
      const res = await axios.delete(deleteUrl);
      console.log(res);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <AddTodoForm fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ border: "2px solid white", margin: "1rem", padding: "1rem" }}
        >
          <p
            style={{
              textDecoration: todo.completed && "line-through",
              opacity: todo.completed && ".5",
            }}
          >
            {todo.title}
          </p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button>Toggle Completed</button>
        </div>
      ))}
    </div>
  );
}
export default Home;
