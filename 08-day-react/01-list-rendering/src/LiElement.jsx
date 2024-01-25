function LiElement() {
  const items = ["one ", "two ", "three "];
  const items2 = [<p>one</p>, <p>two</p>, <p>three</p>]
  const items3 = [<h3>one</h3>, <h3>two</h3>, <h3>three</h3>]
  return (
    <div>
      <h2>LiElement</h2>
      {items} 
      <hr />
      {items2}
      <hr />
      {items3}
    </div>
  );
}
export default LiElement