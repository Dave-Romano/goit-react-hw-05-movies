import axios from "axios";
const TMDB_BASE_URL = "https://api.themoviedb.org/3/";
const APIkeyV3 = "2c30f7534b56c986f6347b858a832517";

export const getData = async (path, query = false) => {
  const newQuery = query ? query : "";
  const { data } = await axios.get(
    `${TMDB_BASE_URL}${path}?api_key=${APIkeyV3}${newQuery}`
  );

  return data;
};
