import { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [tf, setTf] = useState(false);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="active">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="active">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="active">
            <NavLink to="/jobseekers">For job Seekers</NavLink>
          </li>
          <li className="active">
            <NavLink to="/companies">For companies</NavLink>
          </li>
          <li>
            <button className="login_btn">Log In</button>
          </li>
          <li>
            <button className="signIn_btn">Sign In</button>
          </li>
        </ul>
        <div className="menu_bar">
          {
            tf ? (<RxCross2
              className="menu"
              style={{ fontSize: "2.6rem", textAlign: "end" }}
              onClick={() => setTf(!tf)}
            />) :
          (<AiOutlineMenu
            className="menu"
            style={{ fontSize: "2.6rem", textAlign: "end" }}
            onClick={() => setTf(!tf)}
          />)
          }
        </div>
      </nav>
      {tf && <ResponsiveNavbar />}
    </>
  );
}

export default Navbar;
