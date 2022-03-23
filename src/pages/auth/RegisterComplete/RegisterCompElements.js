import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterSec = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  background: #d6e7f8;
  z-index: 100; //for testing purposes only
`;

export const ImgBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const FormBox = styled.div`
  width: 80%;
`;

export const RegH2 = styled.h2`
  color: #71788b;
  font-size: 1.25vw;
  display: inline-block;
  font-weight: normal;

  @media screen and (max-width: 980px) {
    font-size: 25px;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 1.0416666666666665vw;
`;

export const RegSpan = styled.span`
  font-size: 0.8333333333333334vw;
  margin-bottom: 0.26041666666666663vw;
  display: inline-block;
  color: #4b66a5;
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const RegInput = styled.input`
  width: 100%;
  padding: 0.5208333333333333vw 1.0416666666666665vw;
  outline: none;
  border: 0.152083333333333336vw solid #4b66a5;
  font-size: 0.8333333333333334vw;
  color: #4765b2;
  background: transparent;
  border-radius: 1.5625vw;
  @media screen and (max-width: 980px) {
    border: 1.5px solid #4b66a5;
  }

  @media screen and (max-width: 690px) {
    padding: 10px 10px;
  }
`;

export const RegForm = styled.form`
  //
`;

export const RegButton = styled.button`
  width: 100%;
  padding: 0.5208333333333333vw 1.0416666666666665vw;
  outline: none;
  border: 0.052083333333333336vw solid #4b66a5;
  font-size: 0.8333333333333334vw;
  color: #fff;
  background: #4765b2;
  border-radius: 1.5625vw;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #6e86c5;
  }

  @media screen and (max-width: 980px) {
    font-size: 10px;
  }
`;

export const RegP = styled.p`
  color: #4765b2;
  font-size: 0.78125vw;
  @media screen and (max-width: 980px) {
    font-size: 10px;
  }
`;

export const RegLink = styled(Link)`
  color: #4765b2;
  font-size: 1.0416666666666665vw;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

export const RegLink2 = styled(Link)`
  color: #4765b2;
  font-size: 0.625vw;
  @media screen and (max-width: 980px) {
    font-size: 10px;
  }
`;

export const RegH3 = styled.h3`
  color: #4765b2;
  text-align: center;
  margin: 4.166666666666666vw 0 0.5208333333333333vw;
  font-size: 0.7291666666666666vw;
  @media screen and (max-width: 980px) {
    font-size: 10px;
  }
`;

export const RegUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3645833333333333vw;
  cursor: pointer;
  padding: 0.625vw;
  font-size: 1.6666666666666667vw;
  color: #4b66a5;
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;
