import Lottie from "lottie-react";
import "./Engage.css";
import EngagePeoples from "./EngagePeoples.json";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Engage() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 500,
    })
  });
  return (
    <>
      <section className="engage_people_Section">
        <div className="engageText_part" data-aos = "fade-right">
          <div>
          <h3 className="engage_heading">so many poeple are <span>Engaged</span> all over the world</h3>
          <p className="engage_para">Et in sapien enim congue interdum pulvinar non sed. ac augue netus tellus semper.</p>
          <button className="postJob_btn">post a job</button>
          </div>
        </div>
        <div className="engage_people" data-aos = "fade-left">
          <Lottie className = "engage_animation" loop={ true} animationData={EngagePeoples} />
        </div>
      </section>
    </>
  )
};

export default Engage;