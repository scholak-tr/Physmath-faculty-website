import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../img/logofmf.jpg";
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaTelegramPlane, FaYoutube, FaVk } from 'react-icons/fa';
import Burger from './Burger';
/*import MultiSlideCarousel from './MultiSlideCarousel';*/
import WelcomeBanner from './WelcomeBanner';

const Nav = styled.nav`
  height: 80px;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding: 15px 0;
  color: white;
  font-size: 18px;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    color: #333;

    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const Header = () => {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isNewsPage = location.pathname === '/';

  return (
    <div>
      {isNewsPage && (
        <WelcomeBanner />
        /*<div className="carousel-container-app">
          <MultiSlideCarousel />
        </div>*/
      )}
      <header className={`header ${scrollDirection === 'down' && !isNewsPage ? 'hidden' : ''}`} style={{position:'static'}}>
        <Nav>
          <Logo>
            <Link to="/"><img src={logo} alt="Логотип" style={{ width: '80px', height: 'auto' }} /></Link>
          </Logo>
          <Burger />
          <HeaderIcons>
            {/*<a href="https://vk.com/econom.spsu" target="_blank" rel="noopener noreferrer"><FaVk className="faVk" /></a> */}
            <a href="https://www.instagram.com/fizmat_pgu?igsh=NGo1ZnZnMzk2Mnd4" target="_blank" rel="noopener noreferrer"><PiInstagramLogoFill className="faInsta" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="faTelega" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube className="faYou" /></a>
          </HeaderIcons>
        </Nav>
      </header>
    </div>
  );
};

export default Header;
