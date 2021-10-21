import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <div>
      Logo
    </div>
  );
}

const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <li>MenuItem</li>
        <li>MenuItem</li>
        <li>MenuItem</li>
        <li>MenuItem</li>
      </ul>
    </MenuContainer>
  )
}

const User = () => {
  return (
    <div>
      <button>User</button>
    </div>
  )
}

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Menu />
      <User />
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.header`
  padding: 8px; 
  display: flex;
  justify-content: space-between;
  align-items: center ;
`;

const MenuContainer = styled.div`
  & > ul {
    display: flex;
    gap: 0 10px;
    margin: 0;
  }

  & > ul > li {
    display: inline-block;
  }
`;