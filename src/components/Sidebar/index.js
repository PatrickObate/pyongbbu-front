import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  NavItem,
  SidebarLogOut,
} from "./SidebarElements";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/shop" onClick={toggle}>
            Shop
          </SidebarLink>
          {!user && <SidebarLink to="/login">Account</SidebarLink>}
          <SidebarLink to="/cart" onClick={toggle}>
            Cart - {cart.length}
          </SidebarLink>
          {user && (
            <NavItem>
              {user && user.role === "subscriber" && (
                <SidebarLink to="/user/history">Account</SidebarLink>
              )}
              {user && user.role === "admin" && (
                <SidebarLink to="/admin/dashboard">Dashboard</SidebarLink>
              )}
            </NavItem>
          )}
          {user && (
            <NavItem>
              <SidebarLogOut onClick={logout}>Log Out</SidebarLogOut>
            </NavItem>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
