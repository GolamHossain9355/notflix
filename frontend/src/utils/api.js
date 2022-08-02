const headers = new Headers();
headers.append("Content-Type", "application/json");
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

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

export async function listMovies(order='title', signal, genre) {
  let url;
  if(genre){
    url = new URL(`${API_BASE_URL}/movies?genres=${genre}&orderBy=${order}&ascOrDesc=desc`)
  } else {
    url = new URL(`${API_BASE_URL}/movies?orderBy=${order}&ascOrDesc=desc`)
  };
  return await fetchJson(url, { headers, signal }, []);
}