import "./Layout.css";
import React from "react";
import Header from "./header/Header";
import MediaSlider from "./mediaSlider/MediaSlider";
import genreList from "./mediaSlider/genreList";

export default function Layout() {
  return (
    <div>
      <Header />
      {genreList.map((genre, i) => {
        return <MediaSlider title={genre.title} genre={genre.genre} key={i} />;
      })}
    </div>
  );
}
