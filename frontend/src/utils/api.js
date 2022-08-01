//Movies:
const TOP_250_MOVIES_API = process.env.REACT_APP_TOP_250_MOVIES_API;
const MOST_POPULAR_100_MOVIES_API =
  process.env.REACT_APP_MOST_POPULAR_100_MOVIES_API;

//Tvs:
const TOP_250_TVS_API = process.env.REACT_APP_TOP_250_TVS_API;
const MOST_POPULAR_100_TVS_API = process.env.REACT_APP_MOST_POPULAR_100_TVS_API;

/**
 *TODO: Embed Movie or Tv NAME as strings at the end of api:
 */
const MOVIES_SEARCH_API = process.env.REACT_APP_MOVIES_SEARCH_API;
const TV_SEARCH_API = process.env.REACT_APP_MOVIES_SEARCH_API;

/**
 *TODO: Embed Movie or Tv ID as strings at the end of api:
 */
const MOVIES_AND_TV_INFORMATION_API =
  process.env.REACT_APP_MOVIES_AND_TV_INFORMATION_API;
const YOUTUBE_TRAILERS_API = process.env.REACT_APP_YOUTUBE_TRAILERS_API;

const headers = new Headers();
headers.append("Content-Type", "application/json");

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

export async function listMovies(signal) {
  const url = new URL(`${MOST_POPULAR_100_MOVIES_API}`);

  return await fetchJson(url, { headers, signal }, []);
}
