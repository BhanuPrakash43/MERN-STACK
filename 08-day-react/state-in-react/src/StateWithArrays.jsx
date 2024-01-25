import { useState } from "react"


function StateWithArrays() {
    const [tasks, setTasks] = useState(["Task-A", "Task-B"]);
    function handleAdd() {
        const newArray = [...tasks, "NewTask"];
        setTasks(newArray);
    }
  return (
    <div>
        <h1>useState with Arrays</h1>
        <button onClick={handleAdd}>Add New Task</button>
        <ul>
            {tasks.map((task) => (
                <li>
                    <h3>{task}</h3>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default StateWithArrays