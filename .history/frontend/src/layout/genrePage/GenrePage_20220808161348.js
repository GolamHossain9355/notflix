import React, { useEffect, useState } from "react";
import { listMedia } from "../../utils/api.js";

export default function GenrePage({ genre }) {
  const [medias, setMedias] = useState([]);
  useEffect(loadData, [genre]);

  function loadData () {
    const abortController = new AbortController();
    listMedia(abortController.signal, "movies", genre, "title", "asc", 100)
      .then((response) => setMedias(response.data))
      .catch(console.log);
    return () => abortController.abort();
  }

  if (medias) {
    return (
      <div className="genre-page__wrapper">
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
    );
  } else {
    return <div>Loading...</div>;
  }
}
