import ContextTut from "./ContextTut"
import Child from "./Child"

function App() {
  return (
    <div style={{
      backgroundColor: "darkblue",
      padding:"3rem"
      }}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}
export default App