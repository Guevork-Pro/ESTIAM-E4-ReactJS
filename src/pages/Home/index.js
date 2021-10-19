import React from "react";
import Presentation from "./Presentation";
import BookOrJoin from './BookOrJoin';
import RestaurantCards from "./RestaurantCards";

const Home = () => {
  return (
    <div style={{ padding: '8px' }}>
      <Presentation />
      <BookOrJoin />
      <RestaurantCards />
    </div>
  )
}

export default Home;