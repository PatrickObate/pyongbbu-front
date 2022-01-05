import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  &&& {
    background: transparent;
    height: 4.166666666666666vw;
    margin-top: -4.166666666666666vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8333333333333334vw;
    position: sticky;
    top: 0;
    z-index:999;

    @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
    }

    @media screen and (max-width: 768px) {
      height: 80px;
      font-size: 1rem;
      margin-top: -80px;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.166666666666666vw;
  z-index: 1;
  width: 100%;
  padding: 0 1.25vw;
  max-width: 57.291666666666664vw;

  @media screen and (max-width: 768px) {
    height: 80px;
    padding: 0 24px;
    max-width: 1100px;
  }
`;

export const NavLogo = styled(Link)`
  color: #4765b2;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.25vw;
  display: flex;
  align-items: center;
  margin-left: 1.25vw;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 24px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #4765b2;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 4.166666666666666vw;
`;

export const NavLinks = styled(Link)`
  color: #4765b2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8333333333333334vw;
  height: 100%;
`;

export const NavLinks2 = styled(Link)`
  color: #4765b2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8333333333333334vw;
  font-size: 1.0416666666666665vw;
  height: 100%;
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 425px;
  padding: 2px 8px;
  background: #4765b2;
  color: white;
  font-size: 0.625vw;
  border-radius: 50px;
`;

export const LogOut = styled.p`
  /* this is temporary */
  color: #4765b2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8333333333333334vw;
  height: 100%;
  cursor: pointer;
`;
