import React from "react";
import {
  FooterContainer,
  FooterElements,
  FooterElement,
  FooterHeader,
  FooterCopyRight,
} from "./FooterElements";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>Connect with us!</FooterHeader>
      <FooterElements>
        <FooterElement
          href="https://www.facebook.com/Pyongbbu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </FooterElement>
        <FooterElement
          href="https://www.instagram.com/pyongbbu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </FooterElement>
        <FooterElement href="mailto:pyongbbu@gmail.com">
          <AiFillMail />
        </FooterElement>
      </FooterElements>
      <FooterCopyRight>© 2022 - pyongbbu</FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
