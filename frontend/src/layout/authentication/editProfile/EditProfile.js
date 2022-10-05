import React, { useState, useEffect } from "react";
import "./editProfile.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import profileImages from "../../../data/profileImages";

export default function EditProfile() {
  const [formData, setFormData] = useState({});
  const [selectedIMG, setSelectedIMG] = useState(0);
  const { currentUser, updateProfile } = useAuth();
  const navigate = useNavigate();
 console.log(currentUser)
  useEffect(() => {
    setSelectedIMG(Number(currentUser.photoURL));
    setFormData({
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      email: currentUser.email,
    })
  }, [currentUser.photoURL, currentUser.displayName, currentUser.email]);

  const handleImgClick = (num) => {
    setSelectedIMG(num);
    setFormData({...formData, photoURL: num});
  }

  const submitHandler = async (e) => {
    try {
    e.preventDefault();
    await updateProfile(formData);
    navigate("/");
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className="edit-prof__wrapper">
      <form className="edit-prof__form" onSubmit={submitHandler}>
        
        <div className="edit-prof__input--section">
          <label>Username</label>
          <input
            className="edit-prof__input"
            type="text"
            name="user_name"
            placeholder={formData.displayName}
          />
        </div>

        <div className="edit-prof__input--section">
          <label>Password</label>
          <input
            className="edit-prof__input"
            type="password"
            name="user_email"
          />
        </div>

        <div className="edit-prof__input--section">
          <label>E-Mail</label>
          <input
            className="edit-prof__input"
            type="email"
            name="user_email"
            placeholder={formData.email}
          />
        </div>

        <div className="edit-prof__input--section">
          <label>User Icon</label>
          <div className="edit-prof__user-icon--grid">
            {profileImages.map((image, i) => {
              return (
                <img
                  key={i}
                  onClick={() => handleImgClick(i)}
                  className={`edit-prof__user-icon ${selectedIMG === i ? "icon-highlight" : ""}`}
                  alt=""
                  src={image.img}
                />
              );
            })}
          </div>
        </div>

        <div className="edit-prof__form--submit">
          <button className="edit-prof__form--submit--button" type="submit">
            Save
          </button>
        </div>

      </form>
    </div>
  );
}
