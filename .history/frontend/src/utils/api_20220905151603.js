const headers = new Headers();
headers.append("Content-Type", "application/json");
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

async function fetchJson(url, options, onCancel={data:[]}) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    console.error(error);
    return Promise.resolve(onCancel);
  }
}

function constructUrl(urlObject) {
  let url = new URL(`${API_BASE_URL}/media?`);

  for (let [key, value] of Object.entries(urlObject)) {
    if (value) url += `${key}=${value}&`;
  }

  return url;
}

/**
 * @param {string} [type="movies"] (Required - default is "movies")
 * pass in string of the entertainment type either "movies", "series" or "anime"
 *
 * @param {AbortSignal} signal (Required)
 * pass in the abort controller signal here.
 *
 *  @param {string} genre (Optional)
 * pass in the genre you need like "Action", "Comedy", "History", "Biography" etc.
 *
 * @param {string} orderBy (Optional - default is "title")
 * pass in the data to order by, so either "title", "release_date", "imDb_rating" etc.
 *
 * @param {string} ascOrDesc (Optional - default is "asc")
 * pass in whether you want "asc" order(low to high) or "desc" order(high to low).
 *
 * @param {string} limit (Optional)
 * pass in how many items you want to get
 *
 * @return {Object}
 * returns an object with a data key that is an array.
 */
export async function listMedia(
  signal,
  type,
  genre,
  orderBy,
  ascOrDesc,
  limit,
) {
  const url = constructUrl({ type, genre, orderBy, ascOrDesc, limit });
  return await fetchJson(url, { headers, signal });
}

/**
 * @param {AbortSignal} signal (Required)
 * pass in the abort signal.
 *
 * @param {Number} mediaId (Required)
 * pass in the mediaId of the selected movie.
 *
 * @return {Object}
 * returns an object with a data key that is an array with one object inside.
 *
 * example:
 * const data = await getSingleMovie(abortcontroller.signal, 1157);
 */
export async function getMedia(signal, mediaId) {
  const url = new URL(`${API_BASE_URL}/media/${mediaId}`);
  return await fetchJson(url, { headers, signal });
}

/**
 * @param {AbortSignal} signal (Required)
 * pass in abort signal
 * 
 * @param {Object} mediaData (Required)
 * pass in an object with image, title, runtime, year_released, genres, 
 * content_rating, metacritic_rating, imDb_rating, summery and cast.
 * Not all of this data is required for creating a movie.
 * 
 * @return {Object} 
 * returns an object with a data key that is an array with one object inside.
 * 
 * example:
 * const data = await createMovie(abortcontroller.signal, {
 *  image: "https://m.media-amazon.com/images/M/MV5BNTEzMjk3NzkxMV5BMl5BanBnXkFtZTgwNjY2NDczNDM@._V1_Ratio0.6837_AL_.jpg",
    title: "new created 12 Strong",
    runtime: "130 min",
    year_released: "(2018)",
    genres: "Action, Drama, History",
    content_rating: "R",
    metacritic_rating: "54",
    imDb_rating: "6.50",
    summery: "12 Strong tells the story of the first Special Forces team deployed to Afghanistan after 9/11; under the leadership of a new captain, the team must work with an Afghan warlord to take down the Taliban.",
    cast: "Nicolai Fuglsig, Chris Hemsworth, Michael Shannon, Michael Peña, Navid Negahban",
 * })
 */
export async function createMovie(signal, mediaData) {
  const url = new URL(`${API_BASE_URL}/media`);

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: mediaData }),
    signal,
  };

  return fetchJson(url, options, {});
}

export async function updateMovie(signal, mediaData) {
  const url = new URL(`${API_BASE_URL}/media`);

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: mediaData }),
    signal,
  };

  return fetchJson(url, options, {});
}
