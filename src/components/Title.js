import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to="/">
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
    </Link>
  );
}

const Header = styled.header`
  background-color: #c3cfd9;
  width: 100%;
  height: 67px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 34px;
  color: #e8833a;
`;
