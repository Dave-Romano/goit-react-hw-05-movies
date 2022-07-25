import axios from "axios";
const TMDB_BASE_URL = "https://api.themoviedb.org/3/";
const APIkeyV3 = "2c30f7534b56c986f6347b858a832517";
const APIkeyV4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzMwZjc1MzRiNTZjOTg2ZjYzNDdiODU4YTgzMjUxNyIsInN1YiI6IjYyZGVjYzA2ZGMxY2I0MDA0ZmFjOGIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.88_W36lVq6vQQi3YxrSrDxGzKjjyNJQX7lbrVx_CZDE";
const APIexample =
  "https://api.themoviedb.org/3/movie/550?api_key=2c30f7534b56c986f6347b858a832517";

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1
// https://api.themoviedb.org/3/search/movie?api_key=2c30f7534b56c986f6347b858a832517&query=batman

export const getFilm = async (filmName) => {
  const { data } = await axios.get(
    //   `${TMDB_BASE_URL}search/${filmName}?api_key=${APIkeyV3}&page=1`

    "https://api.themoviedb.org/3/search/movie?api_key=2c30f7534b56c986f6347b858a832517&query=batman"
  );
  return data;
};

// trending today
// MOVIE: name, picture, userScore, overview, genres
// ADDITIONAL INFO: cast, reviews
// CAST: picture, name, character
// REVIEWS: author, textOfReview

// SEARCH: searchWord
