import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks2,
  NavLogOut,
} from "./NavbarElements";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Badge } from "antd";

const Navbar = ({ toggle }) => {
  const auth = getAuth();

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const logout = () => {
    signOut(auth);
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
    // temporary, will move logout from navbar to our account page
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">pyongbbu</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/shop">Shop</NavLinks>
            </NavItem>
            {!user && (
              <NavItem>
                <NavLinks to="/login">Account</NavLinks>
              </NavItem>
            )}
            {user && (
              <NavItem>
                {user && user.role === "subscriber" && (
                  <NavLinks to="/user/history">Account</NavLinks>
                )}
                {user && user.role === "admin" && (
                  <NavLinks to="/admin/dashboard">Dashboard</NavLinks>
                )}
              </NavItem>
            )}
            {user && <NavLogOut onClick={logout}>Log Out</NavLogOut>}
            <NavItem>
              <NavLinks2 to="/cart">
                <AiOutlineShoppingCart />
                <Badge count={cart.length} offset={[-4, -21]} />
              </NavLinks2>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
