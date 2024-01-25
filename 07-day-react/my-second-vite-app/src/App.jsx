import Greeting from "./Greeting";
import Header from "./Header";


function App() {

  // header , h1
  const firstName = "John";
  const x = 9;

  const stylesObject = {
    border: "2px solid gold",
    backgroundColor: "black",
    color: "white",
    padding: "2rem",
  };

  return (
    <div style={stylesObject} >
      <h1>This is my main app section</h1>

      <h1>Hello {firstName}</h1>
      {/* <h2>maths : {x > 10 ? "yes" : "No"}</h2>
      <p> hello {`abc ${x > 9}`}</p> */}

      <Greeting firstName="Bhanu" lastName="Prakash" />
      <Greeting firstName="Rahul" lastName="Kumar" />
      <Greeting firstName="Prabhu" lastName="Ranjan" />

      <Header />
    </div>
  );
}

export default App;