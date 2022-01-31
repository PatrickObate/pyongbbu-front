import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #d6e7f8;
  position: relative;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 767px) {
    /* For mobile phones: */
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  width: 50%;
  z-index: 1;

  @media only screen and (max-width: 767px) {
    /* For mobile phones: */
    height: 50%;
    width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const imgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ComponentsContainer = styled.div`
  width: 50%;
  align-items: center;

  @media only screen and (max-width: 767px) {
    /* For mobile phones: */
    height: 50%;
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
`;

export const ProductTitle = styled.h1`
  font-size: 2.2916666666666665vw;
  color: #5f74ac;
  align-items: center;
`;

export const ProductPrice = styled.h2`
  font-size: 1.8229166666666667vw;
  align-items: center;
  color: #ff9900;
`;

export const ProductDescription = styled.p`
  font-size: 1.09375vw;
  align-items: center;
  color: #5f74ac;
`;

export const ProductThing = styled.p`
  font-size: 1.09375vw;
  align-items: center;
  color: #ff9900;
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
`;

export const AddToWishlist = styled.button`
  border: hidden;
  text-decoration: none;
  background: #f6aa34;
  font-size: 75px;
  color: white;
  text-align: center;
  padding: 20px auto 20px auto;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 50%;
`;
