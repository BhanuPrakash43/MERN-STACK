import { Link } from "react-router-dom";
import styels from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styels.main}>
      <h2 className="logo">
        <Link to="/">Movie Search</Link>
      </h2>
    </nav>
  );
}
export default Nav;