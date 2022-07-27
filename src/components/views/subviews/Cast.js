import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilmActors } from "../../api/index";

export default function Cast() {
  const [castArray, setCastArray] = useState([]);
  const [actorImage, setActorImage] = useState([]);

  const filmId = useParams().id;
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  //   console.log(filmId);

  useEffect(() => {
    getFilmActors(filmId).then((res) => {
      setCastArray(res.cast);
      // setActorImage(res.cast.profile_path)
    });
  }, []);

  console.log(castArray);

  return (
    <>
      <ul>
        {castArray.map((el) => (
          <li key={el.name}>
            <img
              width={100}
              src={baseUrl + el.profile_path}
              alt={`IMAGE NOT FOUND: ${el.name}`}
            ></img>
            <p>Actor name: {el.name}</p>
            <p>Character name: {el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
