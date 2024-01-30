import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Completed from "./pages/Completed";
import Layout from "./pages/Layout";

// roote route : /
// routes : parent child relationship
// about route (chile of root route) : /about
// completed route (child of root route) : /completed

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: false,
    },
    {
      id: "3",
      title: "Write Code",
      completed: false,
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home todos={todos} setTodos={setTodos} />} />
        <Route path="about" element={<About />} />
        <Route path="completed" element={<Completed todos={todos} />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
