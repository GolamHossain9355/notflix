import "./editProfile.css";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import profileImages from "../../../data/profileImages";

export default function EditProfile({ inactive, setInactive }) {
  const [selectedIMG, setSelectedIMG] = useState(0);
  const [ display, setDisplay ] = useState({clicked: false, username: false, password: false, email: false, userIcon: false});
  const [ error, setError ] = useState({active: false, message: ""});
  const userNameRef = useRef();
  const confirmEmailRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const passwordRef = useRef();
  const { currentUser, updateProfile, updateEmail, updatePassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { 
    setSelectedIMG(Number(currentUser.photoURL))
  }, [currentUser.photoURL]);

  const handleImgClick = (num, event) => {
    event.preventDefault();
    setSelectedIMG(num);
  }

  const handleButtonClick = (value) => {
    if(value === "username") setDisplay({...display, clicked: true, username: !display.username});
    if(value === "email") setDisplay({...display, clicked: true, email: !display.email});
    if(value === "password") setDisplay({...display, clicked: true, password: !display.password});
    if(value === "userIcon") setDisplay({...display, clicked: true, userIcon: !display.userIcon});
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
    await updateProfile({
      photoURL: selectedIMG,
      displayName: userNameRef.current.value || currentUser.displayName,
    });

    if(emailRef.current.value !== "" && confirmEmailRef.current.value === emailRef.current.value) await updateEmail(emailRef.current.value);
    else if (emailRef.current.value !== "") throw { message: "The e-mail addresses do not match." }

    if(passwordRef.current.value !== ""){
      if(confirmPasswordRef.current.value === passwordRef.current.value) await updatePassword(passwordRef.current.value)
      else if (passwordRef.current.value !== "") throw { message: "The passwords do not match." }
    }

    if(!inactive) setInactive(true);
    navigate("/");
  } catch(err) {
    console.error(err.message);
    setError({active: true, message: err.message});
  }
}

  return (
    <div className="edit-prof__wrapper">
      <div className={`${!error.active ? "error--hide" : "error"}`}>{error.message}</div>
      <form className="edit-prof__form" onSubmit={submitHandler}>
        
      <button type="button" className={`display-button ${display.username ? "hide" : ""}`} onClick={() => handleButtonClick("username")}>Change Username</button>
        <div className={`edit-prof__input--section ${ display.username ? "" : "hide" }`}>
          <label>Username</label>
          <input
            className="edit-prof__input"
            id="userName"
            name="userName"
            placeholder={currentUser.displayName}
            ref={userNameRef}
          />
        </div>

        <button type="button" className={`display-button ${display.password ? "hide" : ""}`} onClick={() => handleButtonClick("password")}>Change Password</button>
        <div className={`edit-prof__input--section ${ display.password ? "" : "hide" }`}>
          <label>Password</label>
          -New Password
          <input
            className="edit-prof__input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPasswordRef}
          />
          <div className="edit-prof__input--sub">-Confirm Password</div>
          <input
            className="edit-prof__input"
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>

        <button type="button" className={`display-button ${display.email ? "hide" : ""}`} onClick={() => handleButtonClick("email")}>Change E-Mail</button>
        <div className={`edit-prof__input--section ${ display.email ? "" : "hide" }`}>
          <label>E-Mail</label>
          <input
            className="edit-prof__input"
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder={currentUser.email}
            ref={confirmEmailRef}
          />
          <div className="edit-prof__input--sub">-Confirm E-Mail Address</div>
          <input
            className="edit-prof__input"
            type="email"
            id="email"
            name="email"
            ref={emailRef}
          />
        </div>

        <button type="button" className={`display-button ${display.userIcon ? "hide" : ""}`} onClick={() => handleButtonClick("userIcon")}>Change User Icon</button>
        <div className={`edit-prof__input--section ${ display.userIcon ? "" : "hide" }`}>
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

        <div className={`edit-prof__form--submit ${display.clicked ? "" : "hide"}`}>
          <button className="edit-prof__form--button" type="submit">
            Save
          </button>
        </div>

      </form>
    </div>
  );
}
