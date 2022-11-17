import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMedia } from "../../utils/api";
import Comments from "./comments/Comments";
import Loading from "../../utils/loading/Loading";
import "./mediaPage.css";

export default function MediaPage(){
  const [media, setMedias] = useState([]);
  const { mediaId } = useParams();

  const dummyData = [
    {
      comment_id: 1,
      media_id: mediaId,
      user_id: 7,
      display_name: "Ren Shadecrest",
      user_image: "10",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
      date: "5-22-2022",
    },
    {
      comment_id: 2,
      media_id: mediaId,
      user_id: 7,
      display_name: "Rabby",
      user_image: "15",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur laborum.",
      rating: 5,
      date: "5-22-2022",
    },
    {
      comment_id: 3,
      media_id: mediaId,
      user_id: 7,
      display_name: "Kira Rhiki",
      user_image: "5",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      rating: 1,
      date: "5-22-2022",
    },
  ]
  
  useEffect(() => {
    const abortController = new AbortController();
    getMedia(abortController.signal, mediaId)
      .then((response) => {
        setMedias(response.data)
      })
      .catch(console.log);
    return () => abortController.abort();
  },[mediaId]);  

  const stars = (num) => {
    let rating=[]

    for (let i=0;i<num;i++){
      rating.push(
      <div key={rating.length} className="star-full">
        <FontAwesomeIcon icon={faStar} fixedWidth />
      </div>)
    }

    if (rating.length !== 5){
      for (let i=5-rating.length;i>0;i--){
        rating.push(
        <div key={rating.length} className="star-empty">
          <FontAwesomeIcon icon={faStar} fixedWidth />
        </div>)
      }
    }

    return rating
  }

  return (
    <div>
      { media.length === 0 ? 

      <Loading size="100" ht="100vh"/>

      :
      <div>
        <div className="media-page__wrapper">
          <div className="media-page__head--grid">
            <img src={media.image} className="media-page__image" alt={media.title}/>
            <div>
              <h1 className="media-page__title">{`${media.title}`}</h1>
              <ul className="media-page__title--info">
                <li>{media.year_released}</li>
                <li>-</li>
                <li>{media.content_rating}</li>
                <li>-</li>
                <li>{media.runtime}</li>
              </ul>
              <div className="media-page__line"/>
              {stars(dummyData.map((data)=>data.rating).reduce((total, current)=> total+current,0)/dummyData.length)}
              <h2 className="media-page__sub-title">Summery -</h2>
              <article className="media-page__summery">
                {media.summery}
              </article>

              <div className="media-page__sub-content--wrapper">

                <section>
                  <h2 className="media-page__sub-title">Cast -</h2>
                  <ul className="media-page__sub-content--list">
                    {media.cast.split(", ").map((member,i)=>{
                      return (
                          <li className="media-page__sub-content--item" key={i}>
                            <a
                              className="wiki-link"
                              href={`https://wikipedia.org/wiki/${member.split(" ").join("_")}`}
                              rel="noreferrer"
                              target="_blank">
                                {member}
                            </a>
                          </li>
                        )
                    })}
                  </ul>
                </section>

                <section>
                  <h2 className="media-page__sub-title">Critics -</h2>
                  <ul className="media-page__sub-content--list">
                    <li className="media-page__sub-content--item">
                      Metacritic - {media.metacritic_rating || "Rating Not Available"}
                    </li>
                    <li className="media-page__sub-content--item">
                      Imdb - {media.imDb_rating}
                    </li>
                  </ul>
              </section>

            </div>

            </div>
          </div>
          <div className="media-page__genres--wrapper">
            {media.genres.split(", ").map((genre,i)=>{
              return (
                <a href={`/genre/${genre}`} className="media-page__genre" key={i}>
                  {genre}
                </a>
              )
            })}
          </div>
          <div className="media-page__line"/>
        </div>
        <Comments mediaId={mediaId} data={dummyData} stars={stars}/>
      </div>

      }
    </div>
    )
}