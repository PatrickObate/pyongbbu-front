import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #d6e7f8;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 767px) {
    /* For mobile phones: */
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  height: 100%;
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
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;


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
margin-right: 50px;
margin-left: 50px;
`

export const ProductTitle = styled.h1`
  font-size: 44px;
  color: #5f74ac;
  text-align: left;
`;

export const ProductPrice = styled.h2`
  font-size: 35px;
  text-align: left;
  color: #ff9900;
`;

export const ProductDescription = styled.p`
  font-size: 21px;
  text-align: left;
  color: #5f74ac;
`;

export const ProductThing = styled.p`
  font-size: 21px;
  text-align: left;
  color: #ff9900;
`;

export const White = styled.p`
  font-size: 21px;
  text-align: center;
  color: white;
`;

export const AddCart = styled.button`
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
