import styled from "styled-components";

export const UsersStyle = styled.div`
  .postView {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0;
    gap: 50px;

    .UsersCard {
      width: 350px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      background-color: #a55200;
      border-radius: 20px;
      gap: 0;
      cursor: pointer;

      &:hover {
        filter: brightness(0.6);
      }

      button {
        padding: 10px 0;
        width: 100px;
        border-radius: 10px;
        border: none;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
          transform: scale(0.98);
          cursor: pointer;
        }
      }
    }
  }

  .tableView {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .UsersCard {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      gap: 400px;
      width: 100%;
      text-align: start;
      border: 1px solid black;
      cursor: pointer;

      &:hover {
        background-color: gray;
      }

      h2 {
        width: 100%;
      }

      p {
        width: 250px;
        text-align: start;
      }

      button {
        padding: 10px 0;
        width: 100px;
        border-radius: 10px;
        border: none;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
          transform: scale(0.98);
          cursor: pointer;
        }
      }
    }
  }
`;

export const NewItem = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  padding: 40px 20px;
  background-color: #302D2D;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  h1 {
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;

    input {
      width: 250px;
      height: 30px;
    }
  }

  button {
    width: 120px;
    height: 40px;
    outline: none;
    color black;
    border: none;
    background-color: green;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 40px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.408);
  z-index: 0;
`;

export const SubmitDelete = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  z-index: 20;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  button {
    width: auto;
    padding: 10px 20px;
    border: none;
    background: brown;
    border-radius: 10px;

    &:hover {
      filter: brightness(0.8);
      transform: scale(0.98);
      cursor: pointer;
    }
  }
`;
