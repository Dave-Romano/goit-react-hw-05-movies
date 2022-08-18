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

  // const test = [];
  // console.log(typeof test);

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

// Basic types TYPESCRIPT:
// number
// string
// Boolean
// null
// undefined
// Object
// Symbol - new in ES6

// boolean
// let isCompleted: boolean = false;
// --
// number
// let six: number = 6;
// --
// string
// let name: string = "David";
// let sentence: string = `hello my name is ${name}`;
// --
// undefined
// const something: undefined = undefined;
// --
// null
// const nothing: null = null;
// --
// void
// це відсутній тип. Наприклад його можна
// використати в функції, як нічого не повертає:
// const greetings = (): void => {
// alert("hello, nice to see you")
// }
// так, як функція нічого не повертає,
// то тип данних для неї непотрібен
// --
//
//
//
//
//
//
//
//
//
//
//
