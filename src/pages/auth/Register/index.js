import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import {
  RegisterSec,
  Image,
  ImgBox,
  FormBox,
  RegH2,
  RegForm,
  InputBox,
  RegSpan,
  RegInput,
  ContentBox,
  RegButton,
  RegP,
  RegLink,
} from "./RegisterElements";
import Image1 from "../../../images/ExampleRegImage.jpg";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);

    window.localStorage.setItem("emailForRegistration", email);

    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );

    setEmail("");
  };

  const RegisterForm = () => (
    <FormBox onSubmit={handleSubmit}>
      <RegH2>Register</RegH2>
      <RegForm>
        <InputBox>
          <RegSpan>Email</RegSpan>
          <RegInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <RegButton type="submit">Register</RegButton>
        </InputBox>
        <InputBox>
          <RegP>Already have an account?</RegP>
          <RegLink to="/login">Login now</RegLink>
        </InputBox>
      </RegForm>
    </FormBox>
  );

  return (
    <RegisterSec>
      <ImgBox>
        <Image src={Image1} />
      </ImgBox>
      <ContentBox>{RegisterForm()}</ContentBox>
    </RegisterSec>
  );
};

export default Register;
