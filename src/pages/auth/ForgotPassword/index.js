import React, { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Image1 from "../../../images/LogIn.jpg";

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
} from "./ForgotPassElements";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const actionCodeSettings = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  const ForgotPassForm = () => (
    <FormBox>
      {loading ? <RegH2>Loading</RegH2> : <RegH2>Forgot Password</RegH2>}
      <RegForm onSubmit={handleSubmit}>
        <InputBox>
          <RegSpan>Email</RegSpan>
          <RegInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <RegButton type="submit" disabled={!email}>
            Submit
          </RegButton>
        </InputBox>
      </RegForm>
    </FormBox>
  );

  return (
    <RegisterSec>
      <ImgBox>
        <Image src={Image1} />
      </ImgBox>
      <ContentBox>{ForgotPassForm()}</ContentBox>
    </RegisterSec>
  );
};

export default ForgotPassword;
