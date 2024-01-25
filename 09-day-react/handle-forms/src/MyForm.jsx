// inputs fields have own state by default

import { useState } from "react";

// we want want t0 control our input fields using react state
// {controlled components}

function MyForm() {
  const [username, setUsername] = useState("");
  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(username);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <input type="submit" value= "submit" />
    </form>
  );
}
export default MyForm;
