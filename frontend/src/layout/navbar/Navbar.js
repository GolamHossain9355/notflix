import React from "react";
import NavButtons from "./NavButtons";
import NavControl from "./NavControl";

export default function Navbar({ inactive, setInactive }){

  return (
    <div>
      <div className={`nav__static-window ${inactive ? "inactive" : ""}`}>
        <div>
          <NavControl inactive={inactive} setInactive={setInactive}/>
        </div>
        <NavButtons inactive={inactive}/>
      </div>
    </div>
  );
};