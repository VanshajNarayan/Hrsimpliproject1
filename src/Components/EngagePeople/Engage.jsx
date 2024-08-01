import Lottie from "lottie-react";
import "./Engage.css";
import EngagePeoples from "./EngagePeoples.json";

function Engage() {
  return (
    <>
      <section className="engage_people_Section">
        <div className="engageText_part">
          <div>
          <h3 className="engage_heading">so many poeple are <span>Engaged</span> all over the world</h3>
          <p className="engage_para">Et in sapien enim congue interdum pulvinar non sed. ac augue netus tellus semper.</p>
          <button className="postJob_btn">post a job</button>
          </div>
        </div>
        <div className="engage_people">
          <Lottie className = "engage_animation" loop={ true} animationData={EngagePeoples} />
        </div>
      </section>
    </>
  )
};

export default Engage;