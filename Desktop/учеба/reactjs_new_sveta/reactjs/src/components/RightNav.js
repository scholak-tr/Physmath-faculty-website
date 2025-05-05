import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Faculty from './Faculty';
import Applicants from './Applicants';
import Science from './Science';
import Teachers from './Teachers';
import Students from './Students';
import { IoMdArrowDropdown } from 'react-icons/io';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaTelegramPlane, FaYoutube, FaVk } from 'react-icons/fa';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 10px 10px;
    cursor: pointer;
    position: relative;
  }

  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    z-index: 10;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const MobileIcons = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    
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
    }
  }
`;

const RightNav = ({ open }) => {
  const [openMenu, setOpenMenu] = React.useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <Ul open={open}>
      <li onClick={() => toggleMenu("faculty")}>Факультет<IoMdArrowDropdown />
        {openMenu === "faculty" && <Faculty className="active" />}
      </li>
      <li onClick={() => toggleMenu("applicants")}>Поступающим<IoMdArrowDropdown />
        {openMenu === "applicants" && <Applicants className="active" />}
      </li>
    {/** <li onClick={() => toggleMenu("science")}>Наука<IoMdArrowDropdown />
        {openMenu === "science" && <Science className="active" />}
      </li> */} 
      <li onClick={() => toggleMenu("teachers")}>Преподавателям<IoMdArrowDropdown />
        {openMenu === "teachers" && <Teachers className="active" />}
      </li>
      <li onClick={() => toggleMenu("students")}>Студентам<IoMdArrowDropdown />
        {openMenu === "students" && <Students className="active" />}
      </li>
      {/*<Link to="/smi" style={{ textDecoration: 'none', color: 'white' }}>
        <li>Мы в СМИ</li>
      </Link>
*/}      {/** 
        <Link to="/schedule" style={{ textDecoration: 'none', color: 'white' }}>
          <li>Расписание</li>
        </Link>
      */}
      
      <MobileIcons>
            {/*<a href="https://vk.com/econom.spsu" target="_blank" rel="noopener noreferrer"><FaVk className="faVk" /></a>*/}
            <a href="https://www.instagram.com/econom.pgu/?igsh=MXR0cG90NDhpd2sxdQ" target="_blank" rel="noopener noreferrer"><PiInstagramLogoFill className="faInsta" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="faTelega" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube className="faYou" /></a>
          </MobileIcons>
    </Ul>
  )
}

export default RightNav;
