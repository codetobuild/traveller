import React from "react";
import CardItem from "./cardItem";
import "./cards.css";
import photos from "../images/images";
const Cards = () => {
  console.log(photos);

  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={photos.img_9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={photos.img_2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={photos.img_3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={photos.img_4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={photos.img_8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
