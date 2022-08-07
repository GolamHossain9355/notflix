import React, { useEffect, useState } from "react";
import { listMedia } from "../../utils/api.js";

export default function MovieSlider({ title, genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(loadData, [genre]);

  function loadData() {
    const abortController = new AbortController();
    listMedia(abortController.signal, "movies", genre, "imDb_rating", "asc", 12)
      .then((response) => setMovies(response.data))
      .catch(console.log);
    return () => abortController.abort();
  }

  if (movies) {
    return (
      <div className="movie-slider__wrapper">
        <div className="movie-slider__head">
          <h2 className="movie-slider__title">{title}</h2>
          <div><a className="movie-slider__view-all" href={`/${genre.toLowerCase()}`}>View All</a></div>
        </div>
        <div className="movie-slider__cards--wrapper">
          {movies.map((movie, i) => {
            return (
              <div className="movie-slider__card" key={i}>
                <img src={movie.image} className="movie-slider__image" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="movie-slider__wrapper">
        <h2 className="movie-slider__title">{genre}</h2>
        <div className="movie-slider__cards--wrapper">
          <div></div>
        </div>
      </div>
    );
  }
}