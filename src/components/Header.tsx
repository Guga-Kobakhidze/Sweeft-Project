import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, HeaderStyle } from "./styles/headerStyle";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const onClick = (link: string) => {
    navigate(`/${link}`);
  };

  return (
    <HeaderStyle>
      <Container>
        <div className="header_content">
          <nav className="navigation">
            <Link to={"/"}>Home</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/resources"}>Recources</Link>
          </nav>
          <div className="authorization">
            <button onClick={() => onClick("login")}>Log in</button>
            <button onClick={() => onClick("register")}>Register</button>
          </div>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
