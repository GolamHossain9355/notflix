const fetch = require("node-fetch");

const titleTypes = ["feature", "tv_series", "tv_specials", "shorts"];

async function movieData() {
  try {
    const response = titleTypes.map((type) => {
      return fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_r87fjt2f?title_type=${type}&countries=us&languages=en&count=250&sort=boxoffice_gross_us,desc`
      );
    });

    const results = await Promise.all(response);
    const data = await Promise.all(results.map((item) => item.json()));

    return data.reduce((allMovieTypesAdded, movieType) => {
      const reorganizedMovies = movieType.results.map((movie) => {
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
      allMovieTypesAdded = allMovieTypesAdded.concat(reorganizedMovies);
      return allMovieTypesAdded;
    }, []);
  } catch (e) {
    console.error(e);
  }
}

module.exports = movieData;
