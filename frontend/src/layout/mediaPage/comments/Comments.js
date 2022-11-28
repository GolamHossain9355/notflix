import { useRef } from "react";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImages from "../../../data/profileImages";
import "./comments.css";

export default function Comments({ mediaId, data, stars }) {
  const newCommentRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("You clicked submit!")
  }

  return (
    <div className="comments__wrapper">

      <div className="">
        <form onSubmit={submitHandler} className="new-comment__form">
          <div>
            <label className="new-comment__label">New Comment</label>
            <textarea
            className="new-comment__input"
            type="text"
            name="newComment"
            id="newComment"
            rows="3"
            ref={newCommentRef}
            required
            />
          </div>

          <div className="new-comment__form-buttons">
            <button className="new-comment__submit" type="submit">save</button>
          </div>
        </form>
      </div>

      {data.map((comment,i)=>{
        return (
          <div key={i} className="comment">

            <img className="comment__user-icon" alt="User Icon" src={profileImages[Number(comment.user_image)].img}/>

            <div className="comment__info-wrapper">
              <div className="comment__user-name">{comment.display_name}</div>
              <div className="comment__rating">{stars(comment.rating)}</div>
              <div className="comment__date">{comment.date}</div>
            </div>

            <div className="comment__body span-2">
              " {comment.body} "
            </div>

          </div>
        )
      })}
    </div>
  )
}