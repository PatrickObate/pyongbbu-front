import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailLink, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";


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
} from "./RegisterCompElements";
import Image1 from "../../../images/CompleteReg.jpg";
import { createOrUpdateUser } from "../../../functions/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  // const { user } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"))
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      // console.log("RESULT", result);
      if (result.user.emailVerified) {
        // remove user email from local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await updatePassword(user, password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        console.log("user", user, "idTokenResult", idTokenResult);

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));

        // redirect
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const CompleteRegistrationForm = () => (
    <FormBox>
      <RegH2>Register Complete</RegH2>
      <RegForm onSubmit={handleSubmit}>
        <InputBox>
          <RegSpan>Email</RegSpan>
          <RegInput type="email" value={email} disabled />
          <RegSpan>Password</RegSpan>
          <RegInput
            type="password"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
          />
        </InputBox>
        <RegButton type="submit"> Complete Registration</RegButton>
      </RegForm>
    </FormBox>
  );

  return (
    <RegisterSec>
      <ImgBox>
        <Image src={Image1} />
      </ImgBox>
      <ContentBox>{CompleteRegistrationForm()}</ContentBox>
    </RegisterSec>
  );
};

export default RegisterComplete;
