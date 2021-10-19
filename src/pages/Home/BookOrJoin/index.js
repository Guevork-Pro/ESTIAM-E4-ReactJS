import React from "react";
import styled from "styled-components";

const ActionButtons = () => {
  return (
    <Container>
      <button>
        Réserver
      </button>

      <button>
        Rejoindre
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ActionButtons