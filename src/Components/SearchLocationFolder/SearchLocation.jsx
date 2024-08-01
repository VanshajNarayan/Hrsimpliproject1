import "./SearchLocation.css";
import { MdOutlineSearch, MdOutlineLocationOn } from "react-icons/md";

function SearchLocation() {
  return (
    <>
      <section className="search_Location">
        <div className="keyword_box">
        <MdOutlineSearch className="icons" />
          <p className="search">
            Search
          </p>
        </div>
        <div className="location_box">
        <MdOutlineLocationOn className="icons" />
          <p className="location">
            Location
          </p>
        </div>
        <div className="searchBtn_box">
          <button className="Search_btn">Search</button>
        </div>
      </section>
    </>
  );
}

export default SearchLocation;
