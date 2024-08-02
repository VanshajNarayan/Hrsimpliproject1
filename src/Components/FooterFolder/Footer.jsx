import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <footer>
          <div className="first_div boxs"></div>
          <div className="second_div boxs">
            <p className="p">for candidates</p>
            <ul>
              <li><NavLink to="https://www.google.com/" target="_blank">overview startup</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">jobs web3 jobs</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">featured salary</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">calculator startup</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">hiring data tech</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">startup remote</NavLink></li>
            </ul>
          </div>
          <div className="third_div boxs">
            <p className="p">for recruiter</p>
            <ul>
              <li><NavLink to="https://www.google.com/" target="_blank">overview recruit pro</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">curated</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">recruiterCloud hire</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">developer pricing</NavLink></li>
            </ul>
          </div>
          <div className="fourth_div boxs">
            <p className="p">company</p>
            <ul>
              <li><NavLink to="https://www.google.com/" target="_blank">about angellist</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">venture help blog</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">term and risks privacy</NavLink></li>
              <li><NavLink to="https://www.google.com/" target="_blank">cookies</NavLink></li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
