import React from "react";
import navdata from "./navdata";

export default function Navbar({ inactive, setInactive }){

  return (
    <div>
      <div className={`nav__static-window ${inactive ? "inactive" : ""}`}>
        <div>
          <button className="nav___collapse-button" onClick={()=>setInactive(!inactive)}>X</button>
        </div>
        <div className="nav__genre-buttons" style={inactive ? {display: "none"} : {}}>
          {navdata.map((button)=>{
            return (
                <a key={button.id} href={button.url} className="nav__button">{button.name}</a>
            )
          })}

        </div>
      </div>
    </div>
  );
};