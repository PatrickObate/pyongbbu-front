import styled from "styled-components";

export const WishlistContainer = styled.div`
  background: #d4e9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100vh;
  position: relative;
  z-index: 1;
  /* add :before styles */
`;

export const WishlistWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

export const WishlistCol1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
export const WishlistCol2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const WishlistViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33.75vw;
  width: 57.96875vw;
  background: white;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
`;
