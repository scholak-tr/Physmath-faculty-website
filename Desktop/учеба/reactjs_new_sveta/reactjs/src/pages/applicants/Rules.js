import React from "react";
import styles from "./Rules.module.css";
import "./../../css/main.css";
import admission from "./../../img/admission.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Rules = () => {
    return ( <>
    <Header />
    <main className={styles["rules-main"]}>
        
        <div className="container-departments">
            <div className="rules-items">
                <a href="https://drive.google.com/file/d/1FnBSb8AA9vZa_dh8miiy27w5264oVP63/view?usp=sharing" target="_blank" >
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={admission} style={{height: '400px', width: '560px'}} alt="Правила приема" />
                        <div className="departments-text">Правила приема</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </a>
            </div>
        </div>
        </main>
        <Footer />
    </> );
}
 
export default Rules;