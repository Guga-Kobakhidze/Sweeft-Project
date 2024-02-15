import React from "react";
import { MainPageStyle } from "./styles/pageStyles";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const onClick = (nav: string) => {
    navigate(`/${nav}`);
  };

  return (
    <MainPageStyle>
      <div onClick={() => onClick("users")} className="firstChild">
        Users
      </div>
      <div onClick={() => onClick("resources")} className="secondChild">
        Resources
      </div>
    </MainPageStyle>
  );
};

export default MainPage;
