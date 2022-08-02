const fetch = require("node-fetch");

async function seriesData() {
  try {
    const response = [
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=tv_series&countries=us&count=250"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=tv_series&countries=us&count=250&sort=moviemeter,desc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=tv_series&countries=us&count=250&sort=user_rating,desc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=tv_series&countries=us&count=250&sort=boxoffice_gross_us,asc"
      ),
      fetch(
        "https://imdb-api.com/API/AdvancedSearch/k_us23mp7b?title_type=tv_series&countries=us&count=250&sort=boxoffice_gross_us,desc"
      ),
    ];

    const results = await Promise.all(response);
    const data = await Promise.all(results.map((item) => item.json()));

    return data.reduce((allSeriesDataAdded, movieType) => {
      const reorganizedMovies = movieType.results.map((series) => {
        const date = formatDate(series.description);
        return {
          series_id: series.id,
          image: series.image,
          title: series.title,
          year_released: date,
          genres: series.genres,
          content_rating: series.contentRating,
          imDb_rating: series.imDbRating,
          summery: series.plot,
          cast: series.stars,
        };
      });
      allSeriesDataAdded = allSeriesDataAdded.concat(reorganizedMovies);
      return allSeriesDataAdded;
    }, []);
  } catch (e) {
    console.error(e);
  }
}

function formatDate(date) {
  const num = date.replace(/[^0-9]/g, "");
  if (num.length === 4) {
    return `${num}`;
  }
  return `${num.substring(0, 4)}-${num.substring(4)}`;
}

module.exports = seriesData;
