import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";

import { getFilmInfo } from "../api/index";

const MovieView = () => {
  const [filmImage, setFilmImage] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);

  const filmId = useParams().id;

  useEffect(() => {
    getFilmInfo(filmId).then((res) => {
      setFilmImage(`https://image.tmdb.org/t/p/w500${res.poster_path}`);
      setFilmTitle(res.title);
      setOverview(res.overview);
      setUserScore(res.vote_average);
      setGenres(res.genres);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/", { replace: false });
        }}
      >
        Go back
      </button>
      <div>
        <img width={300} src={filmImage} alt={filmTitle}></img>
      </div>
      <div>
        <h1>{filmTitle}</h1>
        <p>user score: {userScore}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map((el, idx) => {
            if (idx < genres.length - 1) {
              return `${el.name}, `;
            } else {
              return `${el.name} `;
            }
          })}
        </p>
        <hr />
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${filmId}/cast`}>Cast</Link>
          </li>
          <Link to={`/movies/${filmId}/reviews`}>Reviews</Link>
        </ul>
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default MovieView;
