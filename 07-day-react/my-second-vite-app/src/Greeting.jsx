function Greeting(props) {

  // props are read only (immutable)

  let { firstName, lastName } = props;

  // firstName = "shyam"
  
  return (
    <h1>
      Hello {firstName} {lastName}
    </h1>
  );
}
export default Greeting;
