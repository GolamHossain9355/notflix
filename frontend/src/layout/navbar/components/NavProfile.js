import React from "react";
import dummy from "./dummy.png";

export default function NavProfile() {

  return (
    <div className="nav__profile--wrapper">
      <img src={dummy} alt="" className="nav__profile--img" />
    </div>
  );
}
