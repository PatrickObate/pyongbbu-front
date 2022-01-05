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
  display: flex;
`;

export const Cloud = styled.div``;

export const CloudContainer = styled.div`
  height: 602px;
  width: 100%;
`;
const infinite1 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    background-position: 1829px; 
  }
`;

export const Clouds1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 602px;
  background: url(${cloud1});
  animation: ${infinite1} 150s linear infinite;
  z-index: 1;
`;
const infinite2 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    background-position: 1829px; 
  }
`;

export const Clouds2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 602px;
  background: url(${cloud2});
  animation: ${infinite2} 100s linear infinite;
  z-index: 1;
`;
const infinite3 = keyframes`
  0%{
    background-position: 0px;
  }

  100%{
    background-position: 1829px; 
  }
`;

export const Clouds3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 602px;
  background: url(${cloud3});
  animation: ${infinite3} 70s linear infinite;
  z-index: 1;
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
  width: 784px;
  height: 623px;
  z-index: 7;
  background: url(${down});
  background-repeat: no-repeat;
  right: 78px;
  bottom: 116px;
  transition: 0s linear;
  background-size: cover;

  &:hover {
    background: url(${up});
    transition: 0s linear;
    bottom: 114px;
  }
`;

export const DinoPlace = styled.div`
  position: absolute;
  bottom: 11.979166666666668vw;
  left: 11.979166666666668vw;
  z-index: 4;
  transform: translateY(offsetY * 0.5px);
`;

export const BearPlace = styled.div`
  position: absolute;
  bottom: 11.979166666666668vw;
  left: 15.625vw;
  z-index: 5;
`;

export const StandPlace = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  z-index: 5;
`;

export const AboutHSection = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #d7ddc1;
  z-index: 200;
`;
