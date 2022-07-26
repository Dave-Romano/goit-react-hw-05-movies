import { Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";

import Navigation from "./Navigation/Navigation";

import {
  getTranding,
  getFilm,
  getFilmInfo,
  getFilmActors,
  getFilmReviews,
} from "./api/index";

const app = () => {
  // getFilm("batman").then((res) => {
  //   console.log("FILM SEARCH", res);
  // });

  // getFilmReviews(414906).then((res) => {
  //   console.log("FILM INFO", res);
  // });

  // 414906;
  // const trending = [];

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView />}></Route>
        <Route path="*" element={<NotFoundView />}></Route>
        <Route path="/movies/:id" element={<p>PADLO</p>}></Route>
      </Routes>
    </>
  );
};

export default app;

// redirect по роутам
//+
