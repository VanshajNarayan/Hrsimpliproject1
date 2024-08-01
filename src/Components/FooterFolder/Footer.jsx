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
              <li>overview startup</li>
              <li>jobs web3 jobs</li>
              <li>featured salary</li>
              <li>calculator startup</li>
              <li>hiring data tech</li>
              <li>startup remote</li>
            </ul>
          </div>
          <div className="third_div boxs">
            <p className="p">for recruiter</p>
            <ul>
              <li>overview recruit pro</li>
              <li>curated</li>
              <li>recruiterCloud hire</li>
              <li>developer pricing</li>
            </ul>
          </div>
          <div className="fourth_div boxs">
            <p className="p">company</p>
            <ul>
              <li>about angellist</li>
              <li>venture help blog</li>
              <li>term and risks privacy</li>
              <li>cookies</li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
