import { getTranding } from "../api/index";
import { useState, useEffect } from "react";

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
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default HomeView;
