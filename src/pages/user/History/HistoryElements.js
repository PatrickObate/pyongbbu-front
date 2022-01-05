import styled from "styled-components";

export const HistoryContainer = styled.div`
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

export const HistoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

export const HistoryCol1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
export const HistoryCol2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  
`;

export const HistoryViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33.75vw;
  width: 57.96875vw;
  background: white;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
`;
