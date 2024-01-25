import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "learn React",
      completed: false,
    },
    {
      id: "2",
      title: "Revise DSA question",
      completed: false,
    },
    {
      id: "3",
      title: "revise React Concepts",
      completed: false,
    },
  ]);

  function addTodo(newTodo) {
    console.log("add todo function called");
    console.log(addTodo);
    setTodos((todos) => [...todos, newTodo]);
  }

  function deleteTodo(id) {
    // console.log(id);
    // const newTodos = [];
    // for(let todo of todos){
    //   if(todo.id !==id){
    //     newTodos.push(todo);
    //   } 
    // }
    // setTodos(newTodos);
    setTodos((prevTodo))
  }

  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;
