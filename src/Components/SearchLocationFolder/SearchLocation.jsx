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
    if (showInput.searchValue !== "" || showInput.locationValue !== "") {
      setShowInput({
        ...showInput,
        searchValue: "",
        locationValue: "",
        searchText: false,
        locationText: false,
      });
    }
  }
  return (
    <>
      <section className="search_Location">
        <div className="keyword_box">
          <div
            className="iconAndInputBox"
            style={{ maxWidth: `${showInput.searchText ? "21rem" : "13rem"}` }}>
            <MdOutlineSearch
              title="Click to Search"
              className={showInput.searchText ? "icons" : "icons2"}
            />

            <input
              type="text"
              value={showInput.searchValue}
              style={{
                maxWidth: `${showInput.searchText ? "19rem" : "10rem"}`,
              }}
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Search"
              className={showInput.searchText ? "scale-up-right" : undefined}
              onClick={() =>
                setShowInput({
                  ...showInput,
                  searchText: !showInput.searchText,
                })
              }
              onChange={(e) =>
                setShowInput({ ...showInput, searchValue: e.target.value })
              }
            />
          </div>

          <p className={showInput.searchText ? "SearchHidden" : "Search"}>
            Search
          </p>
        </div>
        <div className="location_box">
          <div
            className="iconAndInputBox"
            style={{
              maxWidth: `${showInput.locationText ? "21rem" : "13rem"}`,
            }}>
            <MdOutlineLocationOn
              title="Click to Locate"
              className={showInput.locationText ? "icons" : "icons2"}
            />
            <input
              type="text"
              value={showInput.locationValue}
              name="location"
              id="location"
              autoComplete="off"
              placeholder="Location"
              className={showInput.locationText ? "scale-up-right" : undefined}
              onClick={() =>
                setShowInput({
                  ...showInput,
                  locationText: !showInput.locationText,
                })
              }
              onChange={(e) =>
                setShowInput({ ...showInput, locationValue: e.target.value })
              }
            />
          </div>
          <p className={showInput.locationText ? "locationHidden" : "location"}>
            Location
          </p>
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
