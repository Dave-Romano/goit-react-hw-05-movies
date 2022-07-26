import { NavLink, Outlet } from "react-router-dom";

import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "link");

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
