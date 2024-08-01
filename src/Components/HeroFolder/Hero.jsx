import "./Hero.css";
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className="hero_Section">
        <div className="heading_part">
          <h1 className="heading">Your Gateway To</h1>
          <p className="heading2">hiring and finding top job</p>
        </div>
        <div className="secondpart">
          <button className="start_btn">get started</button>
          <button className="play_btn"> <FaPlay style={{fontSize:'1.6rem'}}/> </button>
          <p className="our_story">our Story</p>
        </div>
      </section>
    </>
  )
};

export default Hero;