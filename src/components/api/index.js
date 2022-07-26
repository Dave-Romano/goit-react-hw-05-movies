import axios from "axios";
const TMDB_BASE_URL = "https://api.themoviedb.org/3/";
const APIkeyV3 = "2c30f7534b56c986f6347b858a832517";


export const getTranding = async () => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}trending/movie/day?api_key=${APIkeyV3}`
  );
  return data;
};

export const getFilm = async (filmName) => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}search/movie?api_key=${APIkeyV3}&query=${filmName}`
  );
  return data;
};

export const getFilmInfo = async (movieId) => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}movie/${movieId}?api_key=${APIkeyV3}`
  );
  return data;
};

export const getFilmActors = async (movieId) => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}movie/${movieId}/credits?api_key=${APIkeyV3}`
  );
  return data;
};

export const getFilmReviews = async (movieId) => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}movie/${movieId}/reviews?api_key=${APIkeyV3}&page=1`
  );
  return data;
};

// trending today
// MOVIE: name, picture, userScore, overview, genres
// ADDITIONAL INFO: cast, reviews
// CAST: picture, name, character
// REVIEWS: author, textOfReview

// SEARCH: searchWord
