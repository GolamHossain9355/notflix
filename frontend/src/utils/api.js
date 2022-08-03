const headers = new Headers();
headers.append("Content-Type", "application/json");
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

async function fetchJson(url, options, onCancel) {
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
    return Promise.resolve(onCancel);
  }
}

function constructUrl(type, urlObject) {
  let url = new URL(`${API_BASE_URL}/${type}?`);

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
  type = "movies",
  signal,
  genre,
  orderBy,
  ascOrDesc,
  limit
) {
  // let url;
  // if(genre){
  //   url = new URL(`${API_BASE_URL}/movies?genre=${genre}&orderBy=${orderBy}&ascOrDesc=desc`)
  // } else {
  //   url = new URL(`${API_BASE_URL}/movies?orderBy=${orderBy}&ascOrDesc=desc`)
  // };
  const urlObject = { orderBy, genre, ascOrDesc, limit };
  const url = constructUrl(type, urlObject);
  return await fetchJson(url, { headers, signal }, []);
}

export async function getSingleMovie(movieId, signal) {
  const url = new URL(`${API_BASE_URL}/movies/:${movieId}`);

  return await fetchJson(url, { headers, signal }, []);
}
