import styled from "styled-components";

export const LTRContainer = styled.div`
  background: #e3e8ee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5625vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  /* add :before styles */
`;

export const LTRBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LTRCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LTRCountWords = styled.h2`
  color: #4765b2;
  font-size: 1.25vw;
  display: inline-block;
  font-weight: normal;
`;
