import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <nav className={styles.navBar}>
        <Link to="/">
          <h1>Shop</h1>
        </Link>
        <Link to="cart"><h2>Cart</h2></Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;