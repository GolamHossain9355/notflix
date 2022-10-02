import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import dummy from "../../../assets/imgs/profileImages/dummy.png";

export default function NavProfile() {
  const { currentUser } = useAuth();

  return (
    <div className="nav__profile--wrapper">
      <img src={dummy} alt={currentUser?.displayName} className="nav__profile--img" />
      <div className="nav__profile--username">{currentUser?.displayName}</div>
    </div>
  );
}
