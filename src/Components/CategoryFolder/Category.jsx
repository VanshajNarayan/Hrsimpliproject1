import "./Category.css";
import { SiVorondesign  } from "react-icons/si";
import { TbRazorElectric, TbBrandGoogleAnalytics  } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdOutlineEngineering, MdCurrencyRupee  } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PiUserSound } from "react-icons/pi";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Category() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 140,
    });
  });
  return (
    <>
      <section className="category_Section">
        <h3 className="category_heading">Explore by category</h3>
        <div className="category_boxes">
          <div className="design_category box" data-aos="fade-left">
            <div className="icons_div">
              <SiVorondesign  />
            </div>
            <div className="text_part">
              <h4 className="title">Design</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="analyst_category box" data-aos="fade-left">
            <div className="icons_div">
              <TbBrandGoogleAnalytics />
            </div>
            <div className="text_part">
              <h4 className="title">Analyst</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="electrician_category box" data-aos="fade-right">
          <div className="icons_div">
              <TbRazorElectric />
            </div>
            <div className="text_part">
              <h4 className="title">Electrician</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="finance_category box" data-aos="fade-right">
          <div className="icons_div">
              <MdCurrencyRupee  />
            </div>
            <div className="text_part">
              <h4 className="title">Finance</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="technology_category box" data-aos="fade-left">
          <div className="icons_div">
              <GrTechnology />
            </div>
            <div className="text_part">
              <h4 className="title">Technology</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="engineering_category box" data-aos="fade-left">
          <div className="icons_div">
              <MdOutlineEngineering />
            </div>
            <div className="text_part">
              <h4 className="title">Engineering</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>

          <div className="marketing_category box" data-aos="fade-right">
          <div className="icons_div">
              <PiUserSound />
            </div>
            <div className="text_part">
              <h4 className="title">Marketing</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>
          <div className="programmer_category box" data-aos="fade-right">
          <div className="icons_div">
              <FaCode />
            </div>
            <div className="text_part">
              <h4 className="title">Programmer</h4>
              <p className="para">235 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
