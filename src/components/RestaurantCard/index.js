import React from "react";
import styled from "styled-components";


const RestaurantCard = ({ name, img }) => {
  return (
    <Container>
      {name}
      {img}
    </Container>
  )
}

const Container = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid black;
  border-radius: 3px ;
`;

export default RestaurantCard;