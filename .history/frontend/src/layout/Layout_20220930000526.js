import "./layout.css";
import React from "react";
import Header from "./header/Header";
import FeatureSlider from "./featureSlider/FeatureSlider";
import MediaSlider from "./mediaSlider/MediaSlider";
import genreData from "../data/genreData";

import 

export default function Layout() {
  return (
    <div>
      <Header />
      <FeatureSlider/>
      {genreData.map((genre, i) => {
        return <MediaSlider title={genre.title} genre={genre.genre} key={i} />;
      })}
    </div>
  );
}