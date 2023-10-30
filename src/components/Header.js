import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navs from "./Navs";


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logos.png" alt="my logo" className="logo"/>
      </NavLink>
      <Navs/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
    width: 18rem
  }
`;
export default Header;
