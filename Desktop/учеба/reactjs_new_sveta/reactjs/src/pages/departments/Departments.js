import React from "react";
import { Link } from "react-router-dom";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import "./../../css/main.css";
import kaf1 from "./../../img/kaf1.png";
import kaf2 from "./../../img/kaf2.png";
import kaf3 from "./../../img/kaf3.png";
import kaf4 from "./../../img/kaf4.png";
import kaf5 from "./../../img/kaf5.png";
import kaf6 from "./../../img/kaf6.png";

const Departments = () => {
    return ( <>
    <Header />
        <div className="container-departments">
            <div className="departments-items">
                <Link to="/departments/department1">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={kaf1} style={{height: '400px', width: '560px'}} alt="Кафедра прикладной математики и информатики" />
                        <div className="departments-text">Кафедра бизнес-информатики и математических методов в экономике</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='/departments/department2'}>
                    <div className="departments-img-container">
                        <img src={kaf2} style={{height: '400px', width: '560px'}} alt="Кафедра бухгалтерского учета и аудита" />
                        <div className="departments-text">Кафедра бухгалтерского учета и аудита</div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
                <div className="departments-item" onClick={() => window.location.href='/departments/department3'}>
                    <div className="departments-img-container">
                        <img src={kaf3} style={{height: '400px', width: '560px'}} alt="Кафедра финансов и кредита" />
                        <div className="departments-text">Кафедра финансов и кредита</div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
                <div className="departments-item" onClick={() => window.location.href='/departments/department4'}>
                    <div className="departments-img-container">
                        <img src={kaf4} style={{height: '400px', width: '560px'}} alt="Кафедра экономики и менеджмента" />
                        <div className="departments-text">Кафедра экономики и менеджмента</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                <div className="departments-item" onClick={() => window.location.href='/departments/department5'}>
                    <div className="departments-img-container">
                        <img src={kaf5} style={{height: '400px', width: '560px'}} alt="Кафедра экономической теории и мировой экономики" />
                        <div className="departments-text">Кафедра экономической теории и мировой экономики</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                <div className="departments-item" onClick={() => window.location.href='/departments/department6'}>
                    <div className="departments-img-container">
                        <img src={kaf6} style={{height: '400px', width: '560px'}} alt="Учебно-вычислительный центр" />
                        <div className="departments-text">Учебно-вычислительный центр</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
        
     );
}
 
export default Departments;