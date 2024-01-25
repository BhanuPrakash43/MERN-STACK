import { useState } from "react"

function StateWithObjects() {
  const[user, setUser] = useState({
    firstName: " Bhanu",
    gender: "male",
  });

  function changeUsername() {
    // const newUser = {...user, firstName: "Prakash"};
    // setUser(newUser);

    // setUser((prevUser) => {
    //   return {
    //     ...prevUser,
    //     firstName: "Prakash",
    //   }
    // });

    // implicit return when you have object
    setUser((prevUser) =>({
      ...prevUser,
      firstName: "Prakash",
    }));
  }

  return (
    <div>
      <h1>useState With Objects</h1>
      <h3>Username: {user.firstName}</h3>
      <button onClick={changeUsername}>Change Username</button>
    </div>
  )
}
export default StateWithObjects