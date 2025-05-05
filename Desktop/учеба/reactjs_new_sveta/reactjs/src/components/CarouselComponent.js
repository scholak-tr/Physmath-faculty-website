// CarouselComponent.js
import React from 'react';
import Carousel from './Carousel';
import slides from './slides';

const CarouselComponent = () => {
  return <Carousel slides={slides} />;
};

export default CarouselComponent;