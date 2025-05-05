import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import News from './News'; 
import styles from './../pages/applicants/Rules.module.css';

const MultiSlideCarousel = ({title}) => {
  const [current, setCurrent] = useState(0);
  const newsHeaderData = News(); // получаем массив newsData через функцию News
  const navigate = useNavigate(); // используем useNavigate для навигации

  // Фильтруем новости, оставляя только те, которые помечены как "Актуальное" 
  /*const filteredNewsHeaderData = newsHeaderData.filter(news => news.type.includes("АКТУАЛЬНОЕ")); */
  const sortedNewsHeaderData = newsHeaderData.sort((a, b) => b.id - a.id); // сортируем по убыванию ID, чтобы последние новости были первыми 
  /*const limitedNewsHeaderData = sortedNewsHeaderData.slice(0, 20); // Ограничиваем количество слайдов до 20 последних новостей */
  const length = sortedNewsHeaderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // смена слайда каждые 3 секунды
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  if (!Array.isArray(sortedNewsHeaderData) || sortedNewsHeaderData.length <= 0) {
    return null;
  }

  const slides = [...sortedNewsHeaderData, ...sortedNewsHeaderData.slice(0, 2)];

  const handleSlideClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (<>
  <Link to="/users" className={styles["newses"]}>
  <h2 style={{textAlign:'center', marginBottom:'20px'}}>{title}</h2>
  </Link>
  
    <div className="multi-slide-carousel">
      <div className="multi-carousel-container">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${current * 33.33}%)`,
            transition: current % length === 0 ? 'none' : 'transform 0.5s ease-in-out',
          }}
          onTransitionEnd={() => {
            if (current % length === 0) {
              setCurrent(0);
            }
          }}
        >
          {slides.map((newsItem, index) => (
            <div key={index} className="multi-slide" onClick={() => handleSlideClick(newsItem.id)} style={{ cursor: 'pointer' }}>
              <img src={newsItem.images[0]} alt={`slide-${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </div>    
  </>);
};

export default MultiSlideCarousel;



/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import News from './News'; 

const MultiSlideCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);
  const newsHeaderData = News(); // Получаем массив newsData через функцию News
  const navigate = useNavigate(); // Используем useNavigate для навигации

  // Не фильтруем новости, оставляем все
  const sortedNewsHeaderData = newsHeaderData.sort((a, b) => b.id - a.id); // Сортируем по убыванию ID, чтобы последние новости были первыми 
  const limitedNewsHeaderData = sortedNewsHeaderData.slice(0, 12); // Ограничиваем количество слайдов до 12 последних новостей 
  const length = limitedNewsHeaderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Смена слайда каждые 3 секунды
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((current + 1) % Math.ceil(length / 3));
  };

  if (!Array.isArray(limitedNewsHeaderData) || limitedNewsHeaderData.length <= 0) {
    return null;
  }

  const slides = [...limitedNewsHeaderData, ...limitedNewsHeaderData.slice(0, 2)];

  const handleSlideClick = (id) => {
    navigate(`/news/${id}`);
  };

  const truncateTitle = (h1, maxLength) => {
    if (h1.length > maxLength) {
      return h1.substring(0, maxLength) + '...';
    }
    return h1;
  };

  return (
    <div className="multi-slide-carousel">
      <div className="multi-carousel-container">
        <div
          className="carousel-slides"
          style={{
            display: 'flex', 
            transform: `translateX(-${current * (100 / 3)}%)`, 
            transition: current % Math.ceil(length / 3) === 0 ? 'none' : 'transform 0.5s ease-in-out',
          }}
          onTransitionEnd={() => {
            if (current % Math.ceil(length / 3) === 0) {
              setCurrent(0);
            }
          }}
        >
          {slides.map((newsItem, index) => (
            <div
              key={index}
              className="multi-slide"
              onClick={() => handleSlideClick(newsItem.id)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer', position: 'relative', width: '33.33%' }} // Ширина каждой карточки - треть контейнера
            >
              <img src={newsItem.images[0]} alt={`slide-${index}`} className="carousel-image" />
              {hovered === index && (
                <div className='slide-overlay'>
                  <h3 style={{ textAlign: 'center' }}>{truncateTitle(newsItem.h1, 20)}</h3>
                  <img src={newsItem.images[0]} alt={`hover-${index}`} className='hover-image' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSlideCarousel;*/
