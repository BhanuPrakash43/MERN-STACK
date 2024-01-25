// const h1 = document.createElement("h1");
// h1.textContent = "Heading";

// const root = document.getElementById("root");
// root.append(h1);

// console.log(React.createElement);
// tyope, config, children

// h1

// const root = document.getElementById("root");
// const h1Element = React.createElement("h1", {
//     className: "heading",
//     id: "heading",
// }, "Hello React");

// // h1Element is virtualDom (object)
// // console.log(h1Element);

// ReactDOM.createRoot(root).render(h1Element);

// const root = document.getElementById("root");

// First Functional Component

// function helloWorld() {
//   return React.createElement(
//     "h1",
//     {
//       className: "heading",
//       id: "heading",
//     },
//     "Hello React"
//   );
// }

// Babel jsx ----> React.createElement

// function HelloWorld() {
//   return (
//     <h1>
//         Hello <span className = "highlight">React</span> 
//     </h1>
//   );
// }

// h1Element is virtualDom (object)
// console.log(h1Element);

// ReactDOM.createRoot(root).render(HelloWorld());
// ReactDOM.createRoot(root).render(<HelloWorld />);
