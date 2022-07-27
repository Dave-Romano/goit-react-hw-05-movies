import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getFilm } from "../api/index";

const MoviesView = () => {
  const [inputSearchWord, setInputSearchWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [searchFilmName, setSearchfilmName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearchWord.trim() === "") {
      return alert("please enter search word");
    }
    setSearchWord(inputSearchWord);
    getFilm(inputSearchWord).then((res) => {
      setSearchfilmName(res.results);
    });
    setInputSearchWord("");
  };

  useEffect(() => {}, [inputSearchWord]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputSearchWord}
          className="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="search films"
          onChange={(e) =>
            setInputSearchWord(e.currentTarget.value.toLowerCase())
          }
        ></input>
        <button type="submit">Submit</button>
      </form>
      {searchFilmName && (
        <ul>
          {searchFilmName.map((item) => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesView;
