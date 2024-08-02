import { useState } from "react";
import "./SearchLocation.css";
import { MdOutlineSearch, MdOutlineLocationOn } from "react-icons/md";

function SearchLocation() {
  const [showInput, setShowInput] = useState({
    searchText: false,
    locationText: false,
    searchValue: "",
    locationValue: "",
  });
  function handleSearch() {
    if (
      (showInput.searchText && showInput.searchValue !== "") ||
      (showInput.locationText && showInput.locationValue !== "")
    ) {
      setShowInput({
        ...showInput,
        searchValue: "",
        locationValue: "",
        searchText: false,
        locationText: false,
      });
    };
  };
  return (
    <>
      <section className="search_Location">
        <div className="keyword_box">
          <MdOutlineSearch
            title="Click to Search"
            className={showInput.searchText ? "icons" : "icons2"}
            onClick={() =>
              setShowInput({ ...showInput, searchText: !showInput.searchText })
            }
          />
          {showInput.searchText ? (
            <input
              type="text"
              value={showInput.searchValue}
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Search"
              className="scale-up-right"
              onChange={(e) =>
                setShowInput({ ...showInput, searchValue: e.target.value })
              }
            />
          ) : (
            <p className="Search">Search</p>
          )}
        </div>
        <div className="location_box">
          <MdOutlineLocationOn
            title="Click to Locate"
            className={showInput.locationText ? "icons" : "icons2"}
            onClick={() =>
              setShowInput({
                ...showInput,
                locationText: !showInput.locationText,
              })
            }
          />
          {showInput.locationText ? (
            <input
              type="text"
              value={showInput.locationValue}
              name="location"
              id="location"
              autoComplete="off"
              placeholder="Location"
              className="scale-up-right"
              onChange={(e) =>
                setShowInput({ ...showInput, locationValue: e.target.value })
              }
            />
          ) : (
            <p className="location">Location</p>
          )}
        </div>
        <div className="searchBtn_box">
          <button className="Search_btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </section>
    </>
  );
}

export default SearchLocation;
