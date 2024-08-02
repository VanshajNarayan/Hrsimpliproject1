import { NavLink } from "react-router-dom";
import "./ResponsiveNavbar.css";

function ResponsiveNavbar() {
  return (
    <>
      <nav className="res_Navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/jobseekers">For job Seekers</NavLink>
          </li>
          <li>
            <NavLink to="/companies">For companies</NavLink>
          </li>
          <li>
            <button className="login_btn">Log In</button>
          </li>
          <li>
            <button className="signIn_btn">Sign In</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ResponsiveNavbar;
