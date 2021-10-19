import React from "react";
import styled from "styled-components";
import { RestaurantCard } from "../../../components";

// Récupéré de l'API
const restaurants = [
  { id: 1, name: "BurgerKing", image: ':)'}, 
  { id: 2, name: "McDonald", image: ':)'}, 
  { id: 3, name: "Kebab", image: ':)'},
];

const RestaurantCards = () => {
  return (
    <Container>
      {
        restaurants.map(({name}) => {
          return <RestaurantCard key={name} name={name} />;
        })
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 24px;
  flexWrap: wrap;
  justify-content: center;
`;

export default RestaurantCards