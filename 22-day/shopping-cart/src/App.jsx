import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import CartProvider from "./Contexts/CartProvider";
import Cart from "./Pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
export default App;
