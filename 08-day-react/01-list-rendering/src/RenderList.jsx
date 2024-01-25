function RenderList() {
    const items = ["One-one ", "Two-two ", "Three-three "];
    // const taskList = [];
    // for(let task of items){
    //   const taskLi = <li>{task}</li>
    //   taskList.push(taskLi)
    // }
  
    // items.forEach((task) => {
    //   const taskLi = <li>{task}</li>
    //   taskList.push(taskLi);
    // });
  
    // const taskList = items.map((task) => {
    //   return <li>{task}</li>;
    // })
  
    // implicit return
    // const taskList = items.map((task) => <li>{task}</li>)
  
    return (
      <div>
        <h1>App Section</h1>
        {/* <ul>{taskList}</ul> */}
        <ul>
          {items.map((task) => (    // here is direct impicit return
            <li>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default RenderList;
  