import styled from "styled-components";
import footerimg from "../../images/footertest.png";

export const FooterContainer = styled.div`
  background: #d6e7f8;
  height: 30.15625vw;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 49% 41% 10%;
  grid-template-rows: 31% 30% 7% 21% 7% 4%;
  background-image: url(${footerimg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const FooterHeader = styled.h2`
  color: #466ab7;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  font-size: 1.5625vw;
  text-align: center;

  @media screen and (max-width: 980px) {
    font-size: 18px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;
  }
`;

export const FooterElements = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  text-align: center;
  color: #466ab7;
`;

export const FooterElement = styled.a`
  font-size: 3.6458333333333335vw;
  margin: auto 0.8854166666666666vw auto 0.8854166666666666vw;
  text-decoration: none;
  color: #466ab7;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 980px) {
    font-size: 30px;
  }
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;

export const FooterCopyRight = styled.h3`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  color: #466ab7;
  text-align: center;
  font-size: 1.0416666666666665vw;

  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 690px) {
    font-size: 10px;
  }
`;
