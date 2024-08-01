import "./LatestJob.css";
import { MdArrowOutward } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

function Posts() {
  return (
    <>
      <div className="firstBox job_box">
        <div className="first_div">
          <div className="first one">
            <p className="job_para">apply before</p>
            <p className="job_detail">22 july, 2024</p>
          </div>
          <div className="second one">
            <p className="job_para">job type</p>
            <p className="job_detail">full time</p>
          </div>
          <div className="third one">
            <p className="job_para">salary</p>
            <p className="job_detail">8-10LPA</p>
          </div>
        </div>
        <div className="second_div">
          <div className="iconsAndjobName">
            <p className="job_icons">
              <SiAltiumdesigner />
            </p>
            <p className="jobName">lead product designer</p>
          </div>
          <p className="job_description">
            join our team as an email marketing specialist and lead our digital
            outreach efforts.
          </p>
        </div>
        <hr style={{ marginTop: "2rem", marginBottom: "1rem" }} />
        <div className="third_div">
          <div className="flex">
            <SlLocationPin className="location_icons" />
            <p className="location">noida, uttarpardesh</p>
          </div>
          <div className="flex">
            <p className="more_Detail"> more details</p>
            <MdArrowOutward className="arrow_icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
