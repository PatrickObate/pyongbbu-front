import styled from "styled-components";

export const PasswordContainer = styled.div`
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

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

export const PasswordCol1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
export const PasswordCol2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const PasswordViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33.75vw;
  width: 57.96875vw;
  background: white;
  border-radius: 1.7187500000000002vw;
  outline: solid #4765b2;
`;

export const FormBox = styled.div`
  width: 50%;
`;

export const PasswordH2 = styled.h2`
  color: #71788b;
  font-size: 1.25vw;
  display: inline-block;
  font-weight: normal;
`;

export const InputBox = styled.div`
  margin-bottom: 1.0416666666666665vw;
`;

export const PasswordSpan = styled.span`
  font-size: 0.8333333333333334vw;
  margin-bottom: 0.26041666666666663vw;
  display: inline-block;
  color: #486eba;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 0.5208333333333333vw 1.0416666666666665vw;
  outline: none;
  border: 0.052083333333333336vw solid black;
  font-size: 0.8333333333333334vw;
  color: #4765b2;
  background: transparent;
  border-radius: 1.5625vw;
`;

export const PasswordForm = styled.form`
  //
`;

export const PasswordButton = styled.button`
  width: 100%;
  padding: 0.5208333333333333vw 1.0416666666666665vw;
  outline: none;
  border: 0.052083333333333336vw solid black;
  font-size: 0.8333333333333334vw;
  color: #fff;
  background: #4765b2;
  border-radius: 1.5625vw;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #6e86c5;
  }
`;