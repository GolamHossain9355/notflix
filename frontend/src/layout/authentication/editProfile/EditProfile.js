import "./editProfile.css";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import profileImages from "../../../data/profileImages";

export default function EditProfile({ inactive, setInactive }) {  
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [selectedIMG, setSelectedIMG] = useState(0);
  const { currentUser, updateProfile, updateEmail, updatePassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { 
    setSelectedIMG(Number(currentUser.photoURL))
  }, [currentUser.photoURL]);

  const handleImgClick = (num) => {
    setSelectedIMG(num);
  }

  const submitHandler = async (event) => {
    try {
    event.preventDefault();

    await updateProfile({
      photoURL: selectedIMG,
      displayName: userNameRef.current.value || currentUser.displayName,
    });

    if(emailRef.current.value != "") await updateEmail(emailRef.current.value);

    if(!inactive) setInactive(true);
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
            id="userName"
            name="userName"
            placeholder={currentUser.displayName}
            ref={userNameRef}
          />
        </div>

        <div className="edit-prof__input--section">
          <label>Password</label>
          <input
            className="edit-prof__input"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>

        <div className="edit-prof__input--section">
          <label>E-Mail</label>
          <input
            className="edit-prof__input"
            type="email"
            id="email"
            name="email"
            placeholder={currentUser.email}
            ref={emailRef}
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
