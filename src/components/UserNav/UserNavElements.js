import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserNavi = styled.nav`
  background: #e4d5ad;
  height: 34.739583333333336vw;
  width: 19.53125vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2916666666666665vw;
  z-index: 10;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
`;

export const UserNavContainer = styled.div`
  display: flex;
  height: 34.739583333333336vw;
  width: 19.53125vw;
  align-items: center;
  justify-content: center;
`;

export const UserNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const UserNavItem = styled.li`

`;

export const UserNavLink = styled(Link)`
  color: #4765b2;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 3.229166666666667vw;
`;

export const PaginationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`