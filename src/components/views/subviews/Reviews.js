import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilmReviews } from "../../api/index";

export default function Reviews() {
  const [reviewsArray, setReviewsArray] = useState([]);

  const filmId = useParams().id;

  useEffect(() => {
    getFilmReviews(filmId).then((res) => {
      setReviewsArray(res.results);
    });
  }, []);

  return (
    <>
      <ul>
        {reviewsArray.map((el) => (
          <li key={el.id}>
            <h4>{el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
