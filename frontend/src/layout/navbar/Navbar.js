import React from "react";
import NavControl from "./NavControl";
import NavProfile from "./NavProfile";
import NavGenreButtons from "./NavGenreButtons";

export default function Navbar({ inactive, setInactive }){

  return (
    <div>
      <div className={`nav__static-window ${inactive ? "inactive" : ""}`}>
        <div>
          <NavControl inactive={inactive} setInactive={setInactive}/>
        </div>
        <div className="nav__wrapper">
          <NavProfile/>
          <NavGenreButtons inactive={inactive}/>
        </div>
      </div>
    </div>
  );
};