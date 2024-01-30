import styles from "../pages/Completed.module.css";
import { MdDoubleArrow } from "react-icons/md";

function Completed({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    
      <div className={styles.completed}>
      <h1 className={styles.comp}>Completed Todos List</h1>
        {completedTodos.map((todo) => (
          <div key={todo.id}>
            <h2><MdDoubleArrow />   {todo.title}</h2>
          </div>
        ))}
      </div>
    
  );
}
export default Completed;
