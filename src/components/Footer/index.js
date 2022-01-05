import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterRow,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRow>
          <FooterColumn>
            <FooterTitle>Navigate</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">Store</FooterLink>
            <FooterLink to="/">Cart</FooterLink>
            <FooterLink to="/">Account</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Connect With us</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">Store</FooterLink>
            <FooterLink to="/">Cart</FooterLink>
            <FooterLink to="/">Account</FooterLink>
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
