import styled from "styled-components";

export const NewProductsSection = styled.div`
  background: #fef7ef;
  position: relative;
  /* padding: 30px 12.5vw 60px; */
  padding: 1.5625vw 12.5vw  7.604166666666667vw;
  z-index: 150;

  @media screen and (max-width: 980px) {
    padding: 20px 50px 100px;
  }

  @media screen and (max-width: 690px) {
    padding: 20px 30px 50px;
  }
`;

export const ProductTitle = styled.h2`
  /* font-size: 50px; */
  font-size: 2.604166666666667vw;
  color: #5f74ac;

  @media screen and (max-width: 980px) {
    font-size: 25px;
  }
  @media screen and (max-width: 980px) {
    font-size: 19px;
  }
`;


export const ProductsSection = styled.div`
  /* margin: 50px 20px 50px 20px; */
  margin-top: 2.604166666666667vw;
  /* padding-bottom: 50px; */
`;

export const PaginationDiv = styled.div`
  /* margin-top: 20px; */
  margin-top: 1.0416666666666665vw;
`;