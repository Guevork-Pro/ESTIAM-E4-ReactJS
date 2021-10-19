import React  from "react";
import Logo from '../../../logo.svg';
import styled from "styled-components";

const Presentation = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Appli"/>
      </div>
      <div>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;

  & > div {
    display: inline-block;
    width: 50%;
  }
`;

export default Presentation;