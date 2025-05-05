import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Rules.module.css";
import bachelor from "./../../img/bachelor.png";
import specialty from "./../../img/specialty.png";
import master from "./../../img/master.png";

const Contest = () => {
    return ( <>
    <Header/>
    <main>
    <h2 className={styles["h2-main"]}>Текущий конкурс</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areases"]}>
                <Link to="/contest/bachelor">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={bachelor} style={{height: '286px', width: '100%'}} alt="Бакалавриат" />
                        <div className="departments-text text-areas">Бакалавриат</div>
                        {/*<button className="departments-button">Ещё</button>*/}
                    </div>
                </div>
                </Link>
                <Link to="/contest/specialty">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={specialty} style={{height: '286px', width: '100%'}} alt="Специалитет" />
                        <div className="departments-text text-areas">Специалитет</div>
                        {/*<button className="departments-button">Ещё</button>*/}
                    </div>
                </div>
                </Link>
                <Link to="/contest/masterdegree">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={master} style={{height: '286px', width: '100%'}} alt="Магистратура" />
                        <div className="departments-text text-areas">Магистратура</div>
                        {/*<button className="departments-button">Ещё</button>*/}
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </main>
    <Footer/>
    </> );
}
 
export default Contest;