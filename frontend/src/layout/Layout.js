import "./Layout.css";
import React from "react";
import Header from "./header/Header";
import MovieSlider from "./movieSlider/MovieSlider";
import genreList from "./movieSlider/genreList";

export default function Layout() {
  return (
    <div>
      <Header />
      {genreList.map((genre, i) => {
        console.log(genre);
        return <MovieSlider title={genre.title} genre={genre.genre} key={i} />;
      })}
    </div>
  );
}
