import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

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
  RegLink2,
  RegH3,
  RegUl,
  RegLi,
} from "./LoginElements";
import Image1 from "../../../images/LogIn.jpg";
import { createOrUpdateUser } from "../../../functions/auth";

const Login = ({ history }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) history.push("/");
    }
  }, [user, history]);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    // check if intended
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === "admin") {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/history");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

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
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));

      // history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

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
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const LoginForm = () => (
    <FormBox>
      {loading ? <RegH2>Loading</RegH2> : <RegH2>Login</RegH2>}
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
          <RegSpan>Password</RegSpan>
          <RegInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <RegLink2 to="/forgot/password">Forgot your password?</RegLink2>
        </InputBox>
        <InputBox>
          <RegButton type="submit">Login</RegButton>
        </InputBox>
        <InputBox>
          <RegP>Don't have an account?</RegP>
          <RegLink to="/register">Sign up</RegLink>
        </InputBox>
      </RegForm>
      <RegH3>Or sign in with</RegH3>
      <RegUl>
        <RegLi>
          <BsGoogle onClick={googleLogin} />
        </RegLi>
      </RegUl>
    </FormBox>
  );

  return (
    <RegisterSec>
      <ImgBox>
        <Image src={Image1} />
      </ImgBox>
      <ContentBox>{LoginForm()}</ContentBox>
    </RegisterSec>
  );
};

export default Login;
