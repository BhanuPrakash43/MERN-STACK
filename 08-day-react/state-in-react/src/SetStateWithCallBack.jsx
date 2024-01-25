import { useState } from "react";

function SetStateWithCallBack() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(num + 1);

    // setNum((prevState) => {
    //   console.log("previous state val", prevState);
    //   return prevState + 1;
    // });

    // implicit return
    // setNum((prevNum) => prevNum + 1);
  };

  return (
    <>
    <h1>Increment Digit</h1>
      <h1>{num}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}
export default SetStateWithCallBack;
