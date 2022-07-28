import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/index";

export default function Reviews() {
  const [reviewsArray, setReviewsArray] = useState([]);

  const movieId = useParams().id;

  useEffect(() => {
    getData(`movie/${movieId}/reviews`, "&page=1").then((res) => {
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
