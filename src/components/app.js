import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./Navigation/Navigation";

const app = () => {
  const HomeView = lazy(() => import("./views/HomeView"));
  const MovieSearchView = lazy(() => import("./views/MovieSearchView"));
  const MovieView = lazy(() => import("./views/MovieView"));
  const NotFoundView = lazy(() => import("./views/NotFoundView"));
  const Cast = lazy(() => import("./views/subviews/Cast"));
  const Reviews = lazy(() => import("./views/subviews/Reviews"));

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/movies" element={<MovieSearchView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
          <Route path="/movies/:id/" element={<MovieView />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default app;
