function Greeting({fname, lname, children}) {
  return (
    <div>
      <h1>Hello {fname} {lname}</h1>
      <h2>{children}</h2>
    </div>
  )
}
export default Greeting