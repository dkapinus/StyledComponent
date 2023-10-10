import React from "react";
import "./App.css";
import styled from "styled-components";
import { MyAnimations } from "style/animations/Animations";

function App() {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <a href=""> menu item</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        <StyledBTn as={Link} href={"/#"}>
          SuperLink
        </StyledBTn>
        <StyledBTn as="a" href={"/#"}>
          HelloLink
        </StyledBTn>
        <StyledBTn>Hello</StyledBTn>
        <SuperButton>Hi</SuperButton>
      </Box>
    </div>
  );
}

export default App;

const StyledBTn = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 10px 10px;
  color: snow;
  border-radius: 5px;

  &:hover {
    background-color: red;
  }

  &:last-child {
    background-color: pink;
  }
`;

const Link = styled.a`
  color: blue;
  font-size: 2em;
  font-weight: bold;
  background-color: transparent;
  padding: 0px;
`;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const SuperButton = styled(StyledBTn)`
  border-radius: 10px;
  background-color: green;

  &:hover {
    animation: ${MyAnimations} 2s ease-in-out infinite;
  }
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: green;
    }
    li + li {
      margin-left: 20px;
    }
  }
`;
