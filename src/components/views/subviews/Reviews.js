import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFilmReviews } from "../../api/index";

export default function Reviews() {
  const [reviewsArray, setReviewsArray] = useState([]);

  const filmId = useParams().id;

  useEffect(() => {
    getFilmReviews(filmId).then((res) => {
      setReviewsArray(res.results);
      console.log(res.results);
    });
  }, []);

  return (
    <>
      <ul>
        {reviewsArray.map((el) => (
          <li>
            <h4>{el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
