import React, { useEffect, useState } from "react";
import Loading from "../../utils/loading/Loading";
import "./mediaSlider.css";
import { listMedia } from "../../utils/api.js";

export default function MediaSlider({ title, genre }) {
  const [medias, setMedias] = useState([]);
  // const [loading, setLoading] = useState(true)
  useEffect(loadData, [genre]);

  function loadData() {
    const abortController = new AbortController();
    listMedia(abortController.signal, "movie", genre, "imDb_rating", "desc", 12)
      .then((response) => {
        setMedias(response.data)
      })
      .catch(console.log);
    return () => abortController.abort();
  }

  const test = []

  for (const media of me)

  return (
    <div className="media-slider__wrapper">

      { medias === undefined || medias.length === 0 ?

      <Loading/>

      :

      <div>
        <div className="media-slider__head">
          <h2 className="media-slider__title">{title}</h2>
          <div><a className="media-slider__view-all" href={`/genre/${genre}`}>View All</a></div>
        </div>
        <div className="media-slider__cards--wrapper">
          {medias.map((media, i) => {
            return (
              <a href={`/media/${media.media_id}`} className="media-slider__card" key={i}>
                <img src={media.image} className="media-slider__image" />
              </a>
            );
          })}
        </div>
      </div>
      
      }

    </div>
  );
}