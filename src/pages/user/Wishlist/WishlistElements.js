import styled from "styled-components";

export const WishlistContainer = styled.div`
  background: #d4e9f9;
  padding: 0;
  height: 100vh;
  position: relative;
  z-index: 1;
  /* add :before styles */

  @media screen and (max-width: 980px) {
    height: 77.4vh;
  }
  @media screen and (max-width: 690px) {
    height: auto;
    padding: 90px 20px 1px;
  }
`;

export const WishlistWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const WishlistCol1 = styled.div`
  height: auto;
  width: 30%;

  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;
export const WishlistCol2 = styled.div`
  height: auto;
  width: 70%;
  @media screen and (max-width: 690px) {
    height: auto;
    width: 100%;
  }
`;

export const WishlistViewContainer = styled.div`
  height: 33.75vw;
  width: 57.96875vw;
  background: white;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
  margin: auto;

  @media screen and (max-width: 980px) {
    height: 410px;
  }

  @media screen and (max-width: 690px) {
    height: 380px;
    font-size: 13px;
    width: 100%;
  }
`;
