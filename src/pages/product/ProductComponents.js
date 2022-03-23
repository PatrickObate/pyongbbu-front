import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #d6e7f8;
  position: relative;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    height: 70vh;
  }
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    height: auto;
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  width: 50%;
  z-index: 1;
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    height: auto;
    width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const ComponentsContainer = styled.div`
  width: 50%;
  align-items: center;
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    height: 50vh;
    width: 100%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DetailsContainer = styled.div`
  margin: 10.416666666666668vw 2.604166666666667vw 5.208333333333334vw
    2.604166666666667vw;
  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    margin: 60px 10px 10px 10px;
  }
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    margin: 5px 10px 50px 10px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2.2916666666666665vw;
  color: #5f74ac;
  align-items: center;

  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    font-size: 25px;
  }

  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    font-size: 17px;
  }
`;

export const ProductPrice = styled.h2`
  font-size: 1.8229166666666667vw;
  align-items: center;
  color: #ff9900;

  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    font-size: 20px;
  }

  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    font-size: 15px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.09375vw;
  align-items: center;
  color: #5f74ac;

  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    font-size: 17px;
  }

  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    font-size: 13px;
  }
`;

export const ProductThing = styled.p`
  font-size: 1.09375vw;
  align-items: center;
  color: #ff9900;
  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    font-size: 17px;
  }
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    font-size: 13px;
  }
`;

export const White = styled.p`
  font-size: 1.09375vw;
  text-align: center;
  color: white;
`;

export const AddCart = styled.button`
  border: hidden;
  text-decoration: none;
  background: #f6aa34;
  font-size: 3.90625vw;
  color: white;
  text-align: center;
  padding: 1.0416666666666665vw auto 1.0416666666666665vw auto;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 50%;
  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    width: 100%;
    padding: 5px 10px 5px 10px;
  }
`;

export const AddToWishlist = styled.button`
  border: hidden;
  text-decoration: none;
  font-size: 1.5625vw;
  color: #f6aa34;
  background: none;
  text-align: left;
  cursor: pointer;
  position: absolute;
  bottom: 6.25vw;
  margin: 0px 0px 0.204166666666667vw 2.604166666666667vw;

  @media only screen and (max-width: 980px) {
    /* For mobile phones: */
    font-size: 17px;
  }

  @media only screen and (max-width: 690px) {
    /* For mobile phones: */
    bottom: 30px;
    font-size: 13px;
    margin: 0px 0px 2.604166666666667vw 2.604166666666667vw;
  }
`;
