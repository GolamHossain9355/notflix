import React, { useState, useEffect } from "react";
import "./editProfile.css";
import { useAuth } from "../../../contexts/AuthContext";
import profileImages from "../../../data/profileImages";

export default function EditProfile() {
  const [ selectedIMG, setSelectedIMG ] = useState(0);
  const { currentUser } = useAuth();

  useEffect(()=> {
    setSelectedIMG(Number(currentUser.photoURL))
  }, [currentUser.photoURL])

  function handleImgClick(num){
    setSelectedIMG(num)
  }

  return (
    <div className="edit-prof__wrapper">

      <div className="edit-prof__user-icon--grid">
        {profileImages.map((image, i)=>{
          return (
              <img
                onClick={()=> handleImgClick(i)}
                className={`edit-prof__user-icon ${selectedIMG === i ? "icon-highlight" : ""}`}
                alt=""
                src={image.img}/>
          )
        })}
      </div>
      
    </div>
  )
}