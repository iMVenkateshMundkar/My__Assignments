import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar__title">To Do</p>
      <Link to={"/signin"}>
        <p className="navbar__signin">
          Hello Guest <span>Sign In</span>
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
