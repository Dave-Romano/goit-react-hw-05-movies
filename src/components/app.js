import { Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";

import Navigation from "./Navigation/Navigation";

const app = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView />}></Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
    </>
  );
};

export default app;
