import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./Header.styled";
import { pathOfRoutes } from "@/constants/pathOfRoutes";

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={pathOfRoutes.HOME_ROUTE}>Home</NavLink>
          </li>
          <li>
            <NavLink to={pathOfRoutes.ABOUT_US_ROUTE}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={pathOfRoutes.VACANCIES_ROUTE}>Vacancies</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
