import React from "react";
import { UserForm } from "../styles/authorizatiion";
import { UserFormProps } from "../../interfaces/Interfaces";

const UserForms: React.FC<UserFormProps> = ({
  name,
  email,
  password,
  username,
  loading,
  handleSubmit,
}) => {
  return (
    <div>
      <UserForm>
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <label htmlFor="userName">First Name</label>
          <input type="text" id="userName" ref={username} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={email} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={password} />
          <button type="submit" disabled={loading}>
            {loading ? `${name}ing...` : `${name}`}
          </button>
        </form>
      </UserForm>
    </div>
  );
};

export default UserForms;
