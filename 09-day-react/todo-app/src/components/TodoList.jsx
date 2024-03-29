import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        )
      })}
    </div>
  );
}
export default TodoList;
