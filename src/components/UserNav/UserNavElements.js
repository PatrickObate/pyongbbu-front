import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserNavContainer = styled.div`
  background: #e4d5ad;
  height: 34.739583333333336vw;
  width: 19.53125vw;
  font-size: 2.2916666666666665vw;
  z-index: 10;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
  margin: auto;

  @media screen and (max-width: 980px) {
    height: 350px;
    font-size: 20px;
  }

  @media screen and (max-width: 690px) {
    height: auto;
    font-size: 13px;
    width: 100%;
  }
`;

export const UserNavMenu = styled.ul`
  list-style: none;
  text-align: center;
  @media screen and (max-width: 690px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const UserNavItem = styled.li`
  padding: 3.229166666666667vw;
`;

export const UserNavLink = styled(Link)`
  color: #4765b2;
  text-decoration: none;
`;
