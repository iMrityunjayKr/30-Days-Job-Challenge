import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div id="nav">
      <span id="">
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
    </div>
  );
}
export default Navbar;
