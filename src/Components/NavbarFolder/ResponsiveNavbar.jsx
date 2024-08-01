import "./ResponsiveNavbar.css";

function ResponsiveNavbar() {
  return (
    <>
      <nav className="res_Navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">For job Seekers</a>
          </li>
          <li>
            <a href="/">For companies</a>
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
