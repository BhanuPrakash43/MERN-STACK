

// ----------- key prop -----------------

import { useState } from "react"

function KeyProp() {
    const [todos, setTodos] = useState([
        {title: "Todo1", id: "1"},
        {title: "Todo2", id: "2"},
    ]);

  return (
    <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}
export default KeyProp