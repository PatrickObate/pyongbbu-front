import React, { useState } from "react";
import UserNav from "../../../components/UserNav";
import {
  PasswordContainer,
  PasswordWrapper,
  PasswordCol1,
  PasswordCol2,
  PasswordViewContainer,
  FormBox,
  PasswordH2,
  PasswordForm,
  PasswordSpan,
  PasswordInput,
  InputBox,
  PasswordButton,
} from "./PasswordElements";
import { toast } from "react-toastify";
import { getAuth, updatePassword } from "firebase/auth";

const Password = (e) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);

    await updatePassword(user, password)
      .then(() => {
        setLoading(false);
        toast.success("Password updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const passwordUpdateForm = () => (
    <FormBox onSubmit={handleSubmit}>
      {loading ? (
        <PasswordH2>Loading</PasswordH2>
      ) : (
        <PasswordH2>Reset your Password</PasswordH2>
      )}
      <PasswordForm>
        <InputBox>
          <PasswordSpan>Password</PasswordSpan>
          <PasswordInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            value={password}
          />
        </InputBox>
        <InputBox>
          <PasswordButton
            type="submit"
            disabled={!password || password.length < 6 || loading}
          >
            Submit
          </PasswordButton>
        </InputBox>
      </PasswordForm>
    </FormBox>
  );

  return (
    <PasswordContainer>
      <PasswordWrapper>
        <PasswordCol1>
          <UserNav />
        </PasswordCol1>
        <PasswordCol2>
          <PasswordViewContainer>{passwordUpdateForm()}</PasswordViewContainer>
        </PasswordCol2>
      </PasswordWrapper>
    </PasswordContainer>
  );
};

export default Password;
