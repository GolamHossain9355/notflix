import React, { useEffect, useState } from "react";
import "./genrePage.css";
import Loading from "../../utils/loading/Loading";
import { useParams } from 'react-router-dom';
import { listMedia } from "../../utils/api.js";

export default function GenrePage() {
  const [medias, setMedias] = useState([]);
  const { genre } = useParams();
  useEffect(loadData, [genre]);

  function loadData () {
    const abortController = new AbortController();
    listMedia(abortController.signal, "movie", genre, "title", "asc", 100)
      .then((response) => setMedias(response.data))
      .catch(console.log);
    return () => abortController.abort();
  }

    return (
      <div className="genre-page__wrapper">

        { medias === undefined || medias.length === 0 ? 

        <Loading ht="100vh" size="90"/>

        :

        <div>
          <div className="genre-page__media--grid">
            {medias.map((media, i) => {
              return (
                <div className="genre-page__media" key={i}>
                  <a href={`/media/${media.media_id}`}>
                    <img src={media.image} className="genre-page__media--image" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        }
      </div>
    );
}