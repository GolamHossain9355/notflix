const fetch = require("node-fetch");

async function movieData() {
  try {
    const response = await fetch(
      "https://imdb-api.com/API/AdvancedSearch/k_r87fjt2f?title_type=feature&countries=us&languages=en&count=250&sort=boxoffice_gross_us,desc"
    );
    const data = await response.json();
    return data.results.map((movie) => {
      return {
        movie_id: movie.id,
        image: movie.image,
        title: movie.title,
        year_released: movie.description,
        runtime: movie.runtimeStr,
        genres: movie.genres,
        content_rating: movie.contentRating,
        imDb_rating: movie.imDbRating,
        metacritic_rating: movie.metacriticRating,
        summery: movie.plot,
        cast: movie.stars,
      };
    });
  } catch (e) {
    console.error(e);
  }
}

module.exports = movieData;
