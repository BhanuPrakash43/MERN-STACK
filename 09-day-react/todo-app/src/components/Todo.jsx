function Todo({ todo, deleteToto }) {
  function handleDelete(){
    console.log(id);
    deleteToto(todo.id);
  }
  return (
    <div
      key={todo.id}
      style={{
        width: "40vw",
        border: "2px solid white",
        marginTop: "1rem",
        padding: "1rem",
      }}
    >
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.completed ? "completed" : "not completed"}</p>
      <button onClick={handleDelete}>Delete Todo</button>
      <button>Toggle Completed</button>
    </div>
  );
}
export default Todo;
