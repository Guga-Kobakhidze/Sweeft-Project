import React, { useRef } from "react";
import useRequest from "../../hooks/useRequest";
import UserForms from "./UserForms";

const Registration: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { loading, sendRequest } = useRequest({
    url: "https://reqres.in/api/register",
    method: "POST",
  });

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    const registerData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const response = await sendRequest(registerData);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <UserForms
      name="register"
      email={emailRef}
      password={passwordRef}
      username={usernameRef}
      loading={loading}
      handleSubmit={handleRegistration}
    />
  );
};

export default Registration;
