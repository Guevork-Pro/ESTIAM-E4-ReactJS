import React from "react";
import styled from "styled-components";

const BookOrJoin = (props) => {
  return (
    <Container>
      <button onClick={props.clickFunction}> 
        { props.isBlue ? "Mettre en ROUGE" : "Mettre en BLEU" }
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

export default BookOrJoin