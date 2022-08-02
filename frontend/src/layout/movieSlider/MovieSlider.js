import React, { useEffect, useState } from "react";
import { listMovies } from "../../utils/api.js";

export default function MovieSlider({ genre }){
	const [movies,setMovies] = useState([])
	useEffect(loadData, []);

	function loadData(){
		const abortController = new AbortController();
		listMovies("imDb_rating" , abortController.signal, genre)
			.then((response) =>setMovies(response.data))
			.catch(console.log);
			return () => abortController.abort();
	}

	if(movies){
		return (
			<div className="movie-slider__wrapper">
				<h2 className="movie-slider__title">{genre}</h2>
				<div className="movie-slider__cards--wrapper">
					{movies.slice(0, 10).map((movie,i)=>{
						return (
						<div className="movie-slider__card" key={i}>
							<img src={movie.image} className="movie-slider__image"/>
						</div>
						)
					})}
				</div>
			</div>
		)
	} else {
		return (			
			<div className="movie-slider__wrapper">
				<h2 className="movie-slider__title">{genre}</h2>
				<div className="movie-slider__cards--wrapper">
					<div></div>
				</div>
			</div>
		)
	}
}