// import styles from "./ToggleColor.module.css"
// import { useState } from "react"

// function ToggleColor() {
//   const [myToggle, setMyToggle] = useState({
//     color: "white",
//     backgroundColor: "Black",
//   })

//   const handleToggle = () => {
//     if(myToggle.color == "white"){
//       setMyToggle({
//         color: "black",
//         backgroundColor: "white"
//       })
//     }
//     else{
//       setMyToggle({
//         color: "white",
//         backgroundColor: "black"
//       })
//     }
//   }

//   return (
//     <div>
//         <button className={styles.toggle} onClick={handleToggle} >Toggle Color</button>
//     </div>
//   )
// }
// export default ToggleColor



import React, { useState } from 'react';

function ToggleColor() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'black';
    document.body.style.color = isToggled ? 'black' : 'white';
  };

  return (
    <button
      onClick={toggleButton}
      style={{
        color: isToggled ? 'white' : 'black',
        backgroundColor: isToggled ? 'black' : 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      Toggle
    </button>
  );
}

export default ToggleColor;
