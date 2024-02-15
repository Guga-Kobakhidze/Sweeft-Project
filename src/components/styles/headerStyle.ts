import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 5%;
  margin: 0 auto;
`;

export const HeaderStyle = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: lightgray;

  .header_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: black;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: brown;
      }
    }
  }

  .authorization {
    display: flex;
    align-items: center;

    button {
      font-size: 18px;
      color: black;
      outline: none;
      border: 1px solid black;
      border-radius: 10px;
      backgrund-color: transparent;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        color: brown;
      }
    }
  }
`;
