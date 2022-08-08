import React, { useState, useEffect } from "react";
import "./mediaPage.css";
import { useParams } from "react-router-dom";
import { getMedia } from "../../utils/api";

export default function MediaPage(){
  const [media, setMedias] = useState();
  const { mediaId } = useParams();
  useEffect(loadData,[]);

  function loadData () {
    const abortController = new AbortController();
    getMedia(abortController.signal, mediaId)
      .then((response) => {
        setMedias(response.data)
        console.log(response.data)
      })
      .catch(console.log);
    return () => abortController.abort();
  }

  if(media){

    return (
      <div className="media-page__wrapper">
        <div className="media-page__head--grid">
          <img src={media.image} className="media-page__image"/>
          <div>
            <h1 className="media-page__title">{`${media.title}`}</h1>
            <ul className="media-page__sub-title-info">
              <li>{media.year_released}</li>
              <li>-</li>
              <li>{media.content_rating}</li>
              <li>-</li>
              <li>{media.runtime}</li>
            </ul>
            <div className="media-page__line"/>
            <article className="media-page__summery">
              {media.summery}
            </article>
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
    )
  } else {
    return (
      <div>
        Loading ...
      </div>
    )
  }
}