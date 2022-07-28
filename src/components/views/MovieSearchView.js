import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getData } from "../api/index";

const MoviesView = () => {
  const [inputSearchWord, setInputSearchWord] = useState("");
  const [searchFilmName, setSearchfilmName] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearchWord.trim() === "") {
      return alert("please enter search word");
    }
    setSearchParams({ search: inputSearchWord });
    getData("search/movie", `&query=${inputSearchWord}`).then((res) => {
      setSearchfilmName(res.results);
    });
    setInputSearchWord("");
  };

  useEffect(() => {
    if (searchParams.get("search") !== null) {
      const query = `&query=${searchParams.get("search")}`;
      getData("search/movie", query).then((res) => {
        setSearchfilmName(res.results);
      });
    }
  }, []);

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
          onChange={(e) => {
            setInputSearchWord(e.currentTarget.value.toLowerCase());
          }}
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
