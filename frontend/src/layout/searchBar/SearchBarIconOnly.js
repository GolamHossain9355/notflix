import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./searchBarIconOnly.css";

function SearchBarIconOnly() {
  const navigate = useNavigate();

  const handleClick = (_event) => {
    navigate("/search-media", { replaced: false });
  };

  return (
    <div className={`search-bar-icon-only__container ${window.location.pathname === "/search-media" && "display-none"}`}>
      <FontAwesomeIcon
        className="search-bar__icon--only"
        icon={faMagnifyingGlass}
        onClick={handleClick}
      />
    </div>
  );
}

export default SearchBarIconOnly;
