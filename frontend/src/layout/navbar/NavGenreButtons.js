import React from "react";
import navdata from "./navdata";

export default function NavButtons({ inactive }){

  return (
    <div>
      <div className={`nav__genre-buttons--wrapper`}>
            {navdata.map((button)=>{
              return (
                  <a key={button.id} href={button.url} className="nav__genre-button">{button.name}</a>
              )
            })}

      </div>
    </div>
  )
};