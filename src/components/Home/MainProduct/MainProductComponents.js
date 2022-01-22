import styled from "styled-components";
import { Link } from "react-router-dom";

export const MPContainer = styled.div`
  /* padding: 50px 12.5vw 150px; */
  padding: 2.604166666666667vw 12.5vw 7.8125vw;
  background: #d6e7f8;
  z-index: 150;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const ImageContainer = styled.div`
  /* width: 50%; */
`;

export const ComponentsContainer = styled.div`
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageMain = styled.img`
  height: 100%;
  height: auto;
`;

export const Words1 = styled.h2`
  /* font-size: 50px; */
  font-size: 2.604166666666667vw;
  text-align: center;
  color: #5f74ac;
  display: flex;
`;

export const ButtonShop = styled(Link)`
  /* border: 3px solid #a5cbf2; */
  border: 0.15625vw solid #a5cbf2;
  background-color: #cbe0f5;
  color: #5f74ac;
  margin: auto;
  /* padding: 10px 90px 10px; */
  padding: 0.5208333333333333vw 4.6875vw 0.5208333333333333vw;
  text-align: center;
  display: flex;
  /* font-size: 30px; */
  font-size: 1.5625vw;
  cursor: pointer;
  /* border-radius: 30px; */
  border-radius: 1.5625vw;
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
`;
