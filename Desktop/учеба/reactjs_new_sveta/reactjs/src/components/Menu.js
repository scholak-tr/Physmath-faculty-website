import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Faculty from "./Faculty";
import Applicants from "./Applicants";
//import Science from "./Science";
import Teachers from "./Teachers";
import Students from "./Students";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = ({ isOpen, closeMenu, isMobile }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
        console.log("Toggled menu:", menu);
    };

    const handleLinkClick = (path) => {
        console.log("Navigating to:", path);
        closeMenu();
        navigate(path);
    };

    console.log("Menu state isOpen:", isOpen);
    console.log("Menu state isMobile:", isMobile);

    return (
        <div ref={menuRef} className={`menu ${isOpen ? 'open' : ''}`}>
            <nav>
                <ul className="list-menu">
                    <li className="list-menu__item" onClick={() => toggleMenu("faculty")}>
                        Факультет<IoMdArrowDropdown />
                        {openMenu === "faculty" && <Faculty className="active" closeMenu={closeMenu} />}
                    </li>
                    <li className="list-menu__item" onClick={() => toggleMenu("applicants")}>
                        Поступающим<IoMdArrowDropdown />
                        {openMenu === "applicants" && <Applicants className="active" closeMenu={closeMenu} />}
                    </li>
                    {/*<li className="list-menu__item" onClick={() => toggleMenu("science")}>
                        Наука<IoMdArrowDropdown />
                        {openMenu === "science" && <Science className="active" closeMenu={closeMenu} />}
                    </li>*/ }
                    <li className="list-menu__item" onClick={() => toggleMenu("teachers")}>
                        Преподавателям<IoMdArrowDropdown />
                        {openMenu === "teachers" && <Teachers className="active" closeMenu={closeMenu} />}
                    </li>
                    <li className="list-menu__item" onClick={() => toggleMenu("students")}>
                        Студентам<IoMdArrowDropdown />
                        {openMenu === "students" && <Students className="active" closeMenu={closeMenu} />}
                    </li>
                  {/** <li className="list-menu__item" onClick={() => handleLinkClick("/smi")}>
                        Мы в СМИ
                    </li> */} 

                    {/*<li className="list-menu__item" onClick={() => handleLinkClick("/schedule")}>
                        //Расписание
                    //</li>
                    */}
                    
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
