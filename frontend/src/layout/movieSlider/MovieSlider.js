import React from "react";
import data from "../dummyData.js";

export default function MovieSlider({ genre }){

	let movies = []
	let title = ""

	if(genre === "All"){
		movies = data;
		title = "All Movies";
	} else {
		for(let movie of data){
			if(movie.genres.includes(genre)) movies.push(movie);
		};
		title = genre;
	};

  return (
    <div className="movie-slider__wrapper">
			<h2 className="movie-slider__title">{title}</h2>
			<div className="movie-slider__cards--wrapper">
				{movies.map((movie,i)=>{
					return (
					<div className="movie-slider__card" key={i}>
						<img src={movie.image} className="movie-slider__image"/>
					</div>
					)
				})}
			</div>
		</div>
  )
}