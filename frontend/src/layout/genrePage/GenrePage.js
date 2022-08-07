import React, { useEffect, useState } from "react";
import { listMedia } from "../../utils/api.js";

export default function GenrePage({ genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(loadData, [genre]);

  function loadData() {
    const abortController = new AbortController();
    listMedia(abortController.signal, "movies", genre, "title", "asc", 100)
      .then((response) => setMovies(response.data))
      .catch(console.log);
    console.log(movies);
    return () => abortController.abort();
  }

  if (movies) {
    return (
      <div className="genre-page__wrapper">
        <div className="genre-page__movies--grid">
          {movies.map((movie, i) => {
            return (
              <div className="genre-page__movie" key={i}>
                <img src={movie.image} className="genre-page__movie--image" />
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
