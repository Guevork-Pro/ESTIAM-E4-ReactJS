import React from "react";
import Logo from '../../logo.svg'
import styled from "styled-components";

const Presentation = () => {
  return (
    <PresentationContainer>
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
    </PresentationContainer>
  )
}

const PresentationContainer = styled.div`
  display: flex; 
  align-items: center;

  & > div {
    display: inline-block;
    width: 50%;
  }
`;

const ActionButtons = () => {
  return (
    <ActionButtonsContainer>
      <button>
        Réserver
      </button>

      <button>
        Rejoindre
      </button>
    </ActionButtonsContainer>
  )
}

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RestoCard = () => {
  return (
    <RestoCardContainer>
      Pasta
    </RestoCardContainer>
  )
}

const RestoCardContainer = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid black;
  border-radius: 3px ;
`;

const RestaurantCards = () => {
  return (
    <CardsContainer>
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  flexWrap: wrap;
`;

const Content = () => {
  return (
    <div style={{ padding: '8px' }}>
      <Presentation />

      <ActionButtons />

      <RestaurantCards />
    </div>
  )
}

export default Content;