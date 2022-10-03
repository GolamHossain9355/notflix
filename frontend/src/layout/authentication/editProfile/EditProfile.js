import React from "react";
import "./editProfile.css";
import profileImages from "../../../data/profileImages";

export default function EditProfile() {
  return (
    <div className="fakewrap">
      <div className="fakegrid">
        {profileImages.map((image)=>{
          return (
              <img className="edit-prof__user-icon" src={image.img}/>
          )
        })}
      </div>
    </div>
  )
}