import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import profileImages from "../../../data/profileImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./comments.css";

export default function Comments({ movieId }) {
  const { currentUser } = useAuth();

  const dummyData = [
    {
      comment_id: 1,
      media_id: currentUser.displayName,
      user_id: currentUser.userId,
      display_name: "Ren Shadecrest",
      user_image: "10",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
      date: "5-22-2022",
    },
    {
      comment_id: 1,
      media_id: currentUser.displayName,
      user_id: currentUser.userId,
      display_name: "Rabby",
      user_image: "15",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur laborum.",
      rating: 5,
      date: "5-22-2022",
    },
    {
      comment_id: 1,
      media_id: currentUser.displayName,
      user_id: currentUser.userId,
      display_name: "Kira Rhiki",
      user_image: "5",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      rating: 1,
      date: "5-22-2022",
    },
  ]

    const stars = (num) => {
      let rating=[]
  
      for (let i=0;i<num;i++){
        rating.push(
        <div key={i} className="star-full">
          <FontAwesomeIcon icon={faStar} fixedWidth />
        </div>)
      }
  
      if (rating.length !== 5){
        for (let i=5-rating.length;i>0;i--){
          rating.push(
          <div key={i} className="star-empty">
            <FontAwesomeIcon icon={faStar} fixedWidth />
          </div>)
        }
      }
  
      return rating
    }

  return (
    <div className="comments__wrapper">
      {dummyData.map((comment)=>{
        return (
          <div className="comment">

            
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