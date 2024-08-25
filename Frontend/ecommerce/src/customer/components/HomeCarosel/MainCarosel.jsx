import React from "react";
import { mainCarouselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2_000}
      infinite
    />
  );
};

export default MainCarosel;
