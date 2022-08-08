import "./layout.css";
import React from "react";
import Header from "./header/Header";
import MediaSlider from "./mediaSlider/MediaSlider";
import genreData from "./data/genreData";

export default function Layout() {
  return (
    <div>
      <Header />
      {genreData.map((genre, i) => {
        return <MediaSlider title={genre.title} genre={genre.genre} key={i} />;
      })}
    </div>
  );
}
