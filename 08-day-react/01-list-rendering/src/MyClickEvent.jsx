function MyClickEvent() {
    function handleClick(e){
        console.log("click me");
        console.log(e);
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
export default MyClickEvent