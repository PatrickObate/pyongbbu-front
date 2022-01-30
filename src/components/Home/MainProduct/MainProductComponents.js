import styled from "styled-components";
import { Link } from "react-router-dom";

export const MPContainer = styled.div`
  /* padding: 50px 12.5vw 150px; */
  padding: 2.604166666666667vw 12.5vw 9.1125vw;
  background: #d6e7f8;
  z-index: 150;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media screen and (max-width: 980px) {
    padding: 20px 50px 70px;
  }
  @media screen and (max-width: 690px) {
    padding: 20px 50px 70px;
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  /* width: 50%; */
`;

export const ComponentsContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 980px) {
    width: 70%;
  }
`;

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
  @media screen and (max-width: 690px) {
    margin-bottom: 20px;
  }
`;

export const Words1 = styled.h2`
  /* font-size: 50px; */
  font-size: 2.604166666666667vw;
  text-align: center;
  color: #5f74ac;
  @media screen and (max-width: 980px) {
    font-size: 23px;
  }
  @media screen and (max-width: 690px) {
    font-size: 18px;
  }
`;

export const ButtonShop = styled(Link)`
  /* border: 3px solid #a5cbf2; */
  border: 0.15625vw solid #a5cbf2;
  background-color: #cbe0f5;
  color: #5f74ac;
  /* padding: 10px 90px 10px; */
  padding: 0.5208333333333333vw 4.6875vw 0.5208333333333333vw;
  text-align: center;
  /* font-size: 30px; */
  font-size: 1.5625vw;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  /* border-radius: 30px; */
  border-radius: 1.5625vw;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 980px) {
    display: block;
    font-size: 15px;
  }
  @media screen and (max-width: 690px) {
    display: block;
    font-size: 12px;
  }
`;

export const imgdiv = styled.div``;

export const CuteImg = styled.img`
  z-index: 200;
  position: absolute;
  /* bottom: -200px; */
  bottom: -10.416666666666668vw;
  /* right: 50px; */
  right: 2.604166666666667vw;
  /* width: 180px; */
  width: 9.375vw;
  height: auto;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
