import { getData } from "../api/index";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  const [titlesArray, setTitlesArray] = useState([]);

  useEffect(() => {
    getData("trending/movie/day").then((res) => {
      setTitlesArray(res.results);
    });
  }, []);

  // Спитати у Макса
  // (function () {
  //   let message = "hello";
  //   alert(message);
  // })();

  return (
    <>
      <ul>
        {titlesArray.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeView;
