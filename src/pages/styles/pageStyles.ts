import styled from "styled-components";

export const MainPageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .firstChild,
  .secondChild {
    background-color: rgb(12, 78, 12);
    font-size: 140px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      filter: brightness(1.6);
    }
  }

  .secondChild {
    background-color: rgb(12, 12, 69);
  }
`;
