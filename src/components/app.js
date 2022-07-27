import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import MovieSearchView from "./views/MovieSearchView";
import MovieView from "./views/MovieView";
import NotFoundView from "./views/NotFoundView";

import Cast from "./views/subviews/Cast";
import Reviews from "./views/subviews/Reviews";

import Navigation from "./Navigation/Navigation";

import {
  getTranding,
  getFilm,
  getFilmInfo,
  getFilmActors,
  getFilmReviews,
} from "./api/index";

const app = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MovieSearchView />}></Route>
        <Route path="*" element={<NotFoundView />}></Route>
        <Route path="/movies/:id/" element={<MovieView />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default app;

// В пошуку додати шлях пошуку
// Зробити кнопку go back
// Зробити останній пункт домашки
// Пофіксити шляхи до картинок
