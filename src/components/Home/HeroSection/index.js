import React, { useEffect, useState } from "react";
import {
  HeroContainer,
  DinoPlace,
  BearPlace,
  StandPlace,
  BackgroundImg1,
  BackgroundImg2,
  BackgroundImg3,
  Clouds1,
  Clouds2,
  Clouds3,
  StandDown,
  Cloud,
  Background,
  AnimationCharacters,
} from "./HeroElements";
import Lottie from "lottie-react";
import Dino from "../../../lotties/Dino.json";
import Bear from "../../../lotties/Bear.json";
import Stand from "../../../lotties/Stand.json";
import pic1 from "../../../images/1.png";
import pic2 from "../../../images/2.png";
import pic3 from "../../../images/3.png";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroContainer>
        <Cloud>
          <Clouds1 />
          <Clouds2 />
          <Clouds3 />
        </Cloud>

        <Background>
          <BackgroundImg1
            src={pic1}
            style={{ transform: `translateY(${offsetY * 0}px)` }}
          />
          <BackgroundImg2
            src={pic2}
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          />
          <BackgroundImg3
            src={pic3}
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          />
        </Background>

        <AnimationCharacters>
          <DinoPlace>
            <Lottie animationData={Dino} />
          </DinoPlace>
          <BearPlace>
            <Lottie animationData={Bear} />
          </BearPlace>
          <StandDown to="/shop" />
          <StandPlace>
            <Lottie animationData={Stand} />
          </StandPlace>
        </AnimationCharacters>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
