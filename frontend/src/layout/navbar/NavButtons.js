import React from "react";
import navdata from "./navdata";

export default function NavButtons({ inactive }){

  return (
    <div className={`nav__genre-buttons--wrapper ${inactive ? "inactive" : ""}`}>
      <div className={`nav__genre-buttons`}>
            {navdata.map((button)=>{
              return (
                  <a key={button.id} href={button.url} className="nav__button">{button.name}</a>
              )
            })}

      </div>
    </div>
  )
};