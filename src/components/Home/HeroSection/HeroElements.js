import styled from "styled-components";
import ImgBg from "../../../images/Background.png";
import cloud1 from "../../../images/clouds1.png";
import cloud2 from "../../../images/clouds2.png";
import cloud3 from "../../../images/clouds3.png";
import { keyframes } from "styled-components";
import down from "../../../images/StandCharacter.png";
import up from "../../../images/StandCharacter2.png";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  /* background: url(${ImgBg}); */
  background: #d6e7f8;
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 980px) {
    height: 60vh;
  }

  @media screen and (max-width: 690px) {
    height: 50vh;
  }
`;

export const Cloud = styled.div``;

export const CloudContainer = styled.div`
  /* height: 602px; */
  height: 31.354166666666668vw;
  width: 100%;
  @media screen and (max-width: 980px) {
    height: 602px;
  }
`;
const infinite1 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    /* background-position: 1829px;  */
    background-position: 95.26041666666667vw; 

    @media screen and (max-width: 980px) {
      background-position: 1829px; 
  }
  }
`;

export const Clouds1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 602px; */
  height: 100vh;
  background: url(${cloud1});
  animation: ${infinite1} 150s linear infinite;
  z-index: 1;

  @media screen and (max-width: 980px) {
    height: 60vh;
    background-size: cover;
  }
  @media screen and (max-width: 690px) {
    height: 30vh;
    background-size: cover;
  }
`;
const infinite2 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    /* background-position: 1829px;  */
    background-position: 95.26041666666667vw; 
  }
`;

export const Clouds2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 602px; */
  height: 100vh;
  background: url(${cloud2});
  animation: ${infinite2} 100s linear infinite;
  z-index: 1;
  @media screen and (max-width: 980px) {
    height: 60vh;
    background-size: cover;
  }
  @media screen and (max-width: 690px) {
    height: 30vh;
    background-size: cover;
  }
`;
const infinite3 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    /* background-position: 1829px;  */
    background-position: 95.26041666666667vw; 
  }
`;

export const Clouds3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 602px; */
  height: 100vh;
  background: url(${cloud3});
  animation: ${infinite3} 70s linear infinite;
  z-index: 1;
  @media screen and (max-width: 980px) {
    height: 60vh;
    background-size: cover;
  }
  @media screen and (max-width: 690px) {
    height: 30vh;
    background-size: cover;
  }
`;

export const Background = styled.div``;

export const BackgroundImg1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 3;
  overflow: hidden;
`;
export const BackgroundImg2 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  overflow: hidden;
`;
export const BackgroundImg3 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  overflow: hidden;
`;

export const AnimationCharacters = styled.div``;

export const StandDown = styled(Link)`
  position: absolute;
  /* width: 784px; */
  width: 40.833333333333336vw;
  /* height: 623px; */
  height: 32.447916666666664vw;
  z-index: 7;
  background: url(${down});
  background-repeat: no-repeat;
  /* right: 78px; */
  right: 4.0625vw;
  /* bottom: 116px; */
  bottom: 6.041666666666667vw;
  transition: 0s linear;
  background-size: cover;

  @media screen and (max-width: 690px) {
    width: 55.833333333333336vw;
    right: 20vw;
    bottom: 20vw;
  }
  

  &:hover {
    background: url(${up});
    transition: 0s linear;
    width: 40.833333333333336vw;
    height: 32.447916666666664vw;
    background-size: cover;
    /* bottom: 114px; */
    bottom: 5.9375vw;
  }

`;

export const DinoPlace = styled.div`
  position: absolute;
  width: 4.708333333333334vw;
  bottom: 11.979166666666668vw;
  left: 11.979166666666668vw;
  z-index: 4;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const BearPlace = styled.div`
  position: absolute;
  bottom: 11.979166666666668vw;
  left: 15.925vw;
  z-index: 5;
  width: 19vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const StandPlace = styled.div`
  position: absolute;
  /* bottom: 100px; */
  bottom: 5.833333333333333vw;
  /* right: 50px; */
  right: 4.270833333333333vw;
  z-index: 5;
  width: 40.833333333333336vw;

  
  @media screen and (max-width: 690px) {
    width: 55.833333333333336vw;
    right: 20vw;
    bottom: 6.5vw;
  }
`;
