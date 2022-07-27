import { getTranding } from "../api/index";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  const [titlesArray, setTitlesArray] = useState([]);

  useEffect(() => {
    getTranding().then((res) => {
      setTitlesArray(res.results);
    });
  }, []);

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
