import styled from "styled-components";

export const AboutHSection = styled.div`
  /* padding: 30px 12.5vw 150px; */
  padding: 1.5625vw 12.5vw 10.8vw;
  z-index: 150;
  position: relative;
  background: #d7ddc1;
  z-index: 150;

  @media screen and (max-width: 980px) {
    padding: 20px 50px 50px;
  }

  @media screen and (max-width: 690px) {
    padding: 20px 30px 50px;
  }
`;

export const Header = styled.h2`
  /* font-size: 84px; */
  font-size: 4.375vw;
  color: #7d8d6e;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 980px) {
    font-size: 40px;
  }
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;

export const Title = styled.h3`
  /* margin-top: 20px; */
  margin: 1.04vw auto 1.2vw;
  /* margin-bottom: 20px; */
  text-align: center;
  /* font-size: 27px; */
  font-size: 1.40625vw;
  color: #7d8d6e;

  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
  @media screen and (max-width: 690px) {
    font-size: 10px;
  }
`;
export const Body = styled.p`
  /* font-size: 41px; */
  font-size: 2.1354166666666665vw;
  color: #7d8d6e;
  text-align: center;

  @media screen and (max-width: 980px) {
    font-size: 18px;
  }
  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;
