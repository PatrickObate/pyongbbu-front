import styled from "styled-components";
import { Link } from "react-router-dom";

export const MPContainer = styled.div`
  padding: 50px 12.5vw 150px;
  background: #d6e7f8;
  z-index: 150;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const ComponentsContainer = styled.div`
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageMain = styled.img``;

export const Words1 = styled.h2`
  font-size: 50px;
  text-align: center;
  color: #5f74ac;
  display: flex;
`;

export const ButtonShop = styled(Link)`
  border: 3px solid #a5cbf2;
  background-color: #cbe0f5;
  color: #5f74ac;
  margin: auto;
  padding: 10px 90px 10px;
  text-align: center;
  display: flex;
  font-size: 30px;
  cursor: pointer;
  border-radius: 30px;
`;

export const imgdiv = styled.div``;
export const CuteImg = styled.img`
  z-index: 200;
  position: absolute;
  bottom: -200px;
  right: 50px;
  width: 9%;
  height: auto;
`;
