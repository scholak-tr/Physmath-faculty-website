import React, { useState, useEffect } from 'react';
import left from "./../img/arrow_left.svg";
import right from "./../img/arrow_right.svg";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // смена слайда каждые 3 секунды
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveToSlide = (index) => {
    setCurrent(index);
  };

  return (<>
    <div className="carousel">
      <button className="carousel-button left button-car" onClick={prevSlide}><img src={left}/></button>
      <div className="carousel-container">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {index === current && (
                <>
                  <img className='carousel-image' src={slide.image} alt={slide.title} style={{height:'400px'}}/>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      
        <button className="carousel-button right button-car" onClick={nextSlide}><img src={right}/></button>
    
    </div>
    <div className="carousel-dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={index === current ? 'dot active' : 'dot'}
        onClick={() => moveToSlide(index)}
      ></span>
    ))}
  </div>
  </>);
};

export default Carousel;