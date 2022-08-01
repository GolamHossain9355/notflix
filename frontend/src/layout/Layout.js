import "./Layout.css";
import React from "react";
import Header from "./header/Header"
import MovieSlider from "./movieSlider/MovieSlider";
import genreList from "./movieSlider/genreList";
// import { listMovies } from "../utils/api";

export default function Layout() {
  // async function loadMovies() {
  //   const abortController = new AbortController();
  //   try {
  //     const data = await listMovies(abortController.signal);
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // loadMovies();

  return (
    <div>
      <Header/>
      {genreList.map((genre,i)=>{
        return (
        <MovieSlider genre={genre} key={i}/>
        )
      })}
    </div>
    );
}
