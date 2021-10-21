import React from "react";
import Presentation from "./Presentation";
import BookOrJoin from './BookOrJoin';
import RestaurantCards from "./RestaurantCards";

const Home = () => {
  const [isBlue, setIsBlue] = React.useState(true);

  const handleClick = () => {
    setIsBlue(!isBlue);
  }
  
  return (
    <div style={{ padding: '8px', background: isBlue ? "blue" : "red" }}>
      <Presentation />
      <BookOrJoin clickFunction={handleClick} isBlue={isBlue} />
      <RestaurantCards />
    </div>
  )
}

export default Home;