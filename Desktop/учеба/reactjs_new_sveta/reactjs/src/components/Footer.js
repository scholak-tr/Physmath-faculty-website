import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube, FaVk } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton";

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="info">
                    <div className="copyright">
                        <p className="copyright-footer">&copy; Физико-математический факультет</p>
                        <p className="copyright-footer">ГОУ "ПГУ им. Т.Г. Шевченко"</p>
                    </div>
                    <div className="footer-icons">
                        {/*<a href="https://vk.com/econom.spsu" target="_blank"><FaVk className="faVk" /></a>*/}
                        <a href="https://www.instagram.com/fizmat_pgu?igsh=NGo1ZnZnMzk2Mnd4" target="_blank"><PiInstagramLogoFill className="faInsta" /></a>
                        <a href="#" target="_blank"><FaTelegramPlane className="faTelega" /></a>
                        <a href="#" target="_blank"><FaYoutube className="faYou" /></a> 
                    </div>
                    <ScrollToTopButton />
                </div>
            </footer>
        )
    }
}

export default Footer;