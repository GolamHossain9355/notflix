// import { getComments, updateComment, deleteComment } from "../../../utils/api";
import profileImages from "../../../data/profileImages";
import "./comments.css";

export default function Comments({ mediaId, data, stars }) {

  return (
    <div className="comments__wrapper">
      {data.map((comment,i)=>{
        return (
          <div key={comment.comment_id} className="comment">

            <img className="comment__user-icon" src={profileImages[Number(comment.user_image)].img}/>

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