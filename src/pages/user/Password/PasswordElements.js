import styled from "styled-components";

export const PasswordContainer = styled.div`
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

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const PasswordCol1 = styled.div`
  height: auto;
  width: 30%;

  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;
export const PasswordCol2 = styled.div`
  height: auto;
  width: 70%;
  @media screen and (max-width: 690px) {
    height: auto;
    width: 100%;
  }
`;

export const PasswordViewContainer = styled.div`
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

export const FormBox = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const PasswordH2 = styled.h2`
  color: #71788b;
  font-size: 1.25vw;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-weight: normal;
  padding-top: 50px;
  @media screen and (max-width: 980px) {
    font-size: 17px ;
  }
  @media screen and (max-width: 690px) {
    font-size: 20px;
    padding-top: 20px;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 1.0416666666666665vw;
  text-align: center;
  margin: auto;
  width: 80%;
`;

export const PasswordSpan = styled.span`
  font-size: 0.8333333333333334vw;
  margin-bottom: 0.26041666666666663vw;
  display: inline-block;
  color: #486eba;
  @media screen and (max-width: 980px) {
    font-size: 12px ;
  }
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
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
  margin-bottom: 10px;

  @media screen and (max-width: 980px) {
    padding: 7px 5px;
  }
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

  @media screen and (max-width: 980px) {
    padding: 5px 5px 5px;
    font-size: 10px;
  }
`;
