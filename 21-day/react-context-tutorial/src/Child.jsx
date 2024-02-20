import GrandChild from "./GrandChild"

function Child() {
  return (
    <div style={{
        backgroundColor: "darkgreen",
        padding:"3rem"
        }}>
        <h1>Child</h1>
        <GrandChild />
    </div>
  )
}
export default Child