import React from "react";
import "./navbar.css";
import NavControl from "./components/NavControl";
import NavProfile from "./components/NavProfile";
import NavGenreButtons from "./components/NavGenreButtons";

export default function Navbar({ inactive, setInactive }){

  return (
    <div>
      <div className={`nav__static-window ${inactive ? "inactive" : ""}`}>
        <div>
          <NavControl inactive={inactive} setInactive={setInactive}/>
        </div>
        <div className="nav__wrapper">
          <NavProfile/>
          <NavGenreButtons/>
        </div>
      </div>
    </div>
  );
};