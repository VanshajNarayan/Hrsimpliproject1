import "./Connect.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Connect() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 400,
    });
  });
  return (
    <>
      <section className="connect_section" data-aos = "fade-up">
        <p className="connect_text">Connecting startups with top talent</p>
        <div className="connect_btns">
          <button className="hire_btn">Find your next hire</button>
          <button className="next_job">Find your next job</button>
        </div>
      </section>
    </>
  )
};

export default Connect;