import { NavLink, Outlet } from "react-router-dom";

import { getFilm } from "../api/index";

import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  //   fetch();

  const setActive = ({ isActive }) => (isActive ? "active-link" : "link");

  getFilm("batman").then((res) => {
    console.log(res);
  });

  return (
    <NavigationStyled>
      <nav>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActive}>
          Movies
        </NavLink>
      </nav>

      <Outlet />
    </NavigationStyled>
  );
};

export default Navigation;
