import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./MainNavigation.css";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: inset 0 1px 0 0 rgba(217, 217, 217, 0.5);
  background-color: ${(props) => props.theme.main.secondBg};
`;

const StyledNavItem = styled.div`
  text-align: center;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.main.activeTextColor};
  }
  &:hover svg * {
    fill: ${(props) => props.theme.main.activeTextColor};
  }
  & svg {
    display: block;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    & * {
      fill: ${(props) => props.theme.main.secondTextColor};
    }
  }
`;

type NavItem = {
  path: string;
  Icon: React.FC;
  name: string;
};

type MainNavigationProps = {
  navItems: NavItem[];
};

const MainNavigation: React.FC<MainNavigationProps> = ({ navItems }) => {
  return (
    <Navbar>
      {navItems.map(({ path, Icon, name }) => (
        <NavLink to={path} key={path}>
          <StyledNavItem>
            <Icon />
            {name}
          </StyledNavItem>
        </NavLink>
      ))}
    </Navbar>
  );
};

export default MainNavigation;
