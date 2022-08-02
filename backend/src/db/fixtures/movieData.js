const fetch = require("node-fetch");

async function movieData() {
  try {
    const response = [
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250&sort=boxoffice_gross_us,asc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250&sort=boxoffice_gross_us,desc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250&sort=user_rating,asc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250&sort=user_rating,desc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=feature&countries=us&languages=en&count=250&sort=moviemeter,desc"
      ),
    ];

    const results = await Promise.all(response);
    const data = await Promise.all(results.map((item) => item.json()));

    return data.reduce((allMovieDataAdded, movieType) => {
      const reorganizedMovies = movieType.results.map((movie) => {
        const date = movie.description.replace(/\D/g, "");
        return {
          movie_id: movie.id,
          image: movie.image,
          title: movie.title,
          year_released: date,
          runtime: movie.runtimeStr,
          genres: movie.genres,
          content_rating: movie.contentRating,
          imDb_rating: movie.imDbRating,
          metacritic_rating: movie.metacriticRating,
          summery: movie.plot,
          cast: movie.stars,
        };
      });
      allMovieDataAdded = allMovieDataAdded.concat(reorganizedMovies);
      return allMovieDataAdded;
    }, []);
  } catch (e) {
    console.error(e);
  }
}

module.exports = movieData;
