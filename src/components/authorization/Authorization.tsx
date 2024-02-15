import React, { useRef } from "react";
import useRequest from "../../hooks/useRequest";
import UserForms from "./UserForms";
import useCookie from "../../hooks/useCookie";

const Authorization: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [TOKEN, setTOKEN] = useCookie("TOKEN", "");

  const { loading, sendRequest } = useRequest({
    url: "https://reqres.in/api/login",
    method: "POST",
  });

  const { sendRequest: LogOutRequest } = useRequest({
    url: "https://reqres.in/api/logout",
    method: "POST",
  });

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    const UserLogIn = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const response = await sendRequest(UserLogIn);
      console.log("Login successful:", response);
      setTOKEN(response.token);
      console.log(TOKEN);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const onLogOut = async () => {
    try {
      await LogOutRequest({});
      setTOKEN("");
      console.log(`${TOKEN} YOU HAVE BEEN LOGED OUT`);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {TOKEN ? (
        <div>
          <div>Hello {}</div>
          <button onClick={onLogOut}>Log Out</button>
        </div>
      ) : (
        <UserForms
          name={"login"}
          username={usernameRef}
          email={emailRef}
          password={passwordRef}
          loading={loading}
          handleSubmit={handleRegistration}
        />
      )}
    </div>
  );
};

export default Authorization;
