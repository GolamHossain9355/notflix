import React from "react";

export default function NavProfile(){

  return (
    <div className="nav__profile--wrapper">
      <img src={process.env.PUBLIC_URL + `/imgs/avatars/dummy2.png`} className="nav__profile--img"/>
    </div>
  )
}