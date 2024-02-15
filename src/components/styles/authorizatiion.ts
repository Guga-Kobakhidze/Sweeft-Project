import styled from "styled-components";

export const UserForm = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 40px;

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 63px;
    background-color: #302d2d;
    border-radius: 50px;

    h1 {
      align-self: center;
      color: white;
      font-size: 40px;
      margin-bottom: 40px;
    }

    label {
      font-size: 30px;
      color: white;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      border: none;
      outline: none;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      background-color: gray;
      border: none;
      border-radius: 20px;
      align-self: center;
      margin-top: 20px;
      font-size: 22px;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background-color: green;
      }
    }
  }
`;
