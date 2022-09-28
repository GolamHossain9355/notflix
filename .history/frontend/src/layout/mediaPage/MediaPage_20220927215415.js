import React, { useState, useEffect } from "react";
import "./mediaPage.css";
import Loading from "../../utils/loading/Loading";
import { useParams } from "react-router-dom";
import { getMedia } from "../../utils/api";

export default function MediaPage(){
  const [media, setMedias] = useState([]);
  const { mediaId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();
    getMedia(abortController.signal, mediaId)
      .then((response) => {
        setMedias(response.data)
        console.log(response.data)
      })
      .catch(console.log);
    return () => abortController.abort();
  },[mediaId]);

  return (
    <div>
      { media.length === 0 ? 

      <Loading size="100" ht="100vh"/>

      :

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
                    Metacritic - {media.metacritic_rating ?? "N"}
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

      }
    </div>
    )
}