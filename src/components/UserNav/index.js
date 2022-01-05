import React from "react";
import {
  UserNavi,
  UserNavContainer,
  UserNavMenu,
  UserNavItem,
  UserNavLink,
} from "./UserNavElements";

const UserNav = () => {
  return (
    <UserNavi>
      <UserNavContainer>
        <UserNavMenu>
          <UserNavItem>
            <UserNavLink to="/user/history">History</UserNavLink>
          </UserNavItem>
          <UserNavItem>
            <UserNavLink to="/user/password">Password</UserNavLink>
          </UserNavItem>
          <UserNavItem>
            <UserNavLink to="/user/wishlist">Wishlist</UserNavLink>
          </UserNavItem>
        </UserNavMenu>
      </UserNavContainer>
    </UserNavi>
  );
};

export default UserNav;
