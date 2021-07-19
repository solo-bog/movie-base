import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./MainNavigation.css";
import { ReactComponent as MoviesIcon } from "../../assets/img/clapperboard.svg";
import { ReactComponent as TVIcon } from "../../assets/img/tv.svg";
import { ReactComponent as PeopleIcon } from "../../assets/img/group.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/user.svg";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: inset 0 1px 0 0 rgba(217, 217, 217, 0.5);
  background-color: #fefefe;
`;

const StyledNavItem = styled.div`
  text-align: center;
  text-transform: uppercase;
  &:hover {
    color: #e24951;
  }
  &:hover svg * {
    fill: #e24951;
  }
  & svg {
    display: block;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    & * {
      fill: #999999;
    }
  }
`;

const MainNavigation = () => {
  return (
    <Navbar>
      <NavLink to="/movies">
        <StyledNavItem>
          <MoviesIcon />
          Movies
        </StyledNavItem>
      </NavLink>
      <NavLink to="/tv">
        <StyledNavItem>
          <TVIcon />
          TV
        </StyledNavItem>
      </NavLink>
      <NavLink to="/people">
        <StyledNavItem>
          <PeopleIcon />
          People
        </StyledNavItem>
      </NavLink>
      <NavLink to="/profile">
        <StyledNavItem>
          <ProfileIcon />
          Profile
        </StyledNavItem>
      </NavLink>
    </Navbar>
  );
};

export default MainNavigation;
