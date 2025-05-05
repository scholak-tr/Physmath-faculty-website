import React from "react";
/*import { Link } from "react-router-dom";*/
import Header from "../../components/Header";
import Footer from "../../components/Footer";
/*
import styles from "./Rules.module.css";
import areas1 from "./../../img/areas1.png";
import areas2 from "./../../img/areas2.png";
import areas3 from "./../../img/areas3.png";
import areas4 from "./../../img/areas4.png";
import areas5 from "./../../img/areas5.png";
import areas6 from "./../../img/areas6.png";
import areas7 from "./../../img/areas7.png";
import areas8 from "./../../img/areas8.png";
import areas9 from "./../../img/areas9.png";
import areas10 from "./../../img/areas10.png";
import areas11 from "./../../img/areas11.png";
import areas12 from "./../../img/areas12.png";
import areas13 from "./../../img/areas13.png";
import areas14 from "./../../img/areas14.png";
import areas15 from "./../../img/areas15.png";
import areas16 from "./../../img/areas16.png";
import areas17 from "./../../img/areas17.png";
import areas18 from "./../../img/areas18.png";
import areas19 from "./../../img/areas19.png";
import areas20 from "./../../img/areas20.png";
*/

import AreasNew from "./AreasNew";

const Areas = () => {
    return ( <>
    <Header/>
    <main>
        <AreasNew />
        
       {/* 
       <h2 className={styles["h2-main"]}>БАКАЛАВРИАТ</h2>
        <h2 className={styles["h2-main"]}>Направление "Бизнес-информатика"</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areas"]}>
                <Link to="/areas/areas1">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas1} style={{height: '400px', width: '560px'}} alt="Применение и разработка информационных систем в экономике" />
                        <div className="departments-text text-areas">Применение и разработка информационных систем в экономике</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        <h2 className={styles["h2-main"]}>Направление "Менеджмент"</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areas"]}>
                <Link to="/areas/areas2">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas2} style={{height: '400px', width: '560px'}} alt="Управление персоналом" />
                        <div className="departments-text text-areas">Управление персоналом</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>Направление "Экономика"</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areases"]}>
                <Link to="/areas/areas3">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={areas3} style={{height: '286px', width: '100%'}} alt="Бухгалтерский учет, анализ и аудит" />
                        <div className="departments-text text-areas">Бухгалтерский учет, анализ и аудит</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <Link to="/areas/areas4">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={areas4} style={{height: '286px', width: '100%'}} alt="Внешнеэкономические связи и таможенный консалтинг" />
                        <div className="departments-text text-areas">Внешнеэкономические связи и таможенный консалтинг</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <Link to="/areas/areas5">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={areas5} style={{height: '286px', width: '100%'}} alt="Налоги и налоговый консалтинг" />
                        <div className="departments-text text-areas">Налоги и налоговый консалтинг</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <Link to="/areas/areas6">
                <div className="departments-item departments-item__areas">
                    <div className="departments-img-container">
                        <img src={areas6} style={{height: '286px', width: '100%'}} alt="Финансы и кредит" />
                        <div className="departments-text text-areas">Финансы и кредит</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <Link to="/areas/areas7">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={areas7} style={{height: '286px', width: '100%'}} alt="Экономика и менеджмент" />
                        <div className="departments-text text-areas">Экономика и менеджмент</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <Link to="/areas/areas8">
                <div className="departments-item departments-item__areas" >
                    <div className="departments-img-container">
                        <img src={areas8} style={{height: '286px', width: '100%'}} alt="Экономика социально-трудовых отношений" />
                        <div className="departments-text text-areas">Экономика&nbsp;социально-<br/>трудовых отношений</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        
        <h2 className={styles["h2-main"]}>СПЕЦИАЛИТЕТ</h2>
        <h2 className={styles["h2-main"]}>Направление "Экономическая безопасность"</h2>

        <div className="container-departments">
            <div className="departments-items">
                <Link to="/areas/areas9">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas9} style={{height: '400px', width: '560px'}} alt="Экономико-правовое обеспечение экономической безопасности" />
                        <div className="departments-text"><pre>Экономико-правовое<br/>обеспечение&nbsp;экономической<br/>безопасности</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='/areas/areas10'}>
                    <div className="departments-img-container">
                        <img src={areas10} style={{height: '400px', width: '560px'}} alt="Финансово-экономическая безопасность" />
                        <div className="departments-text"><pre>Финансово-экономическая<br/>безопасность</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>МАГИСТРАТУРА</h2>
        <h2 className={styles["h2-main"]}>Направление "Менеджмент"</h2>

        <div className="container-departments">
            <div className="departments-items">
                <Link to="/areas/areas11">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas11} style={{height: '400px', width: '560px'}} alt="Управление и разработка информационными системами в экономике" />
                        <div className="departments-text"><pre>Управление и разработка<br/>информационными<br/> системами в экономике</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='/areas/areas12'}>
                    <div className="departments-img-container">
                        <img src={areas12} style={{height: '400px', width: '560px'}} alt="Экономика и управление на предприятии /в организации" />
                        <div className="departments-text"><pre>Экономика и управление<br/>на предприятии /в организации</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>Направление "Финансы и кредит"</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areas"]}>
                <Link to="/areas/areas13">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas13} style={{height: '400px', width: '560px'}} alt="Финансовая экономика и монетарное регулирование" />
                        <div className="departments-text text-areas">Финансовая&nbsp;экономика&nbsp;и<br/>монетарное&nbsp;регулирование</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>Направление "Экономика"</h2>
        <div className="container-departments">
            <div className="departments-items">
                <Link to="/areas/areas14">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas14} style={{height: '400px', width: '560px'}} alt="Аудит и финансовый консалтинг" />
                        <div className="departments-text"><pre>Аудит и финансовый<br/>консалтинг</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='/areas/areas15'}>
                    <div className="departments-img-container">
                        <img src={areas15} style={{height: '400px', width: '560px'}} alt="Бухгалтерский учет, анализ и аудит в отраслях" />
                        <div className="departments-text"><pre>Бухгалтерский учет,<br/>анализ и аудит в<br/>отраслях</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
                <Link to="/areas/areas16">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas16} style={{height: '400px', width: '560px'}} alt="Международные финансы и банки" />
                        <div className="departments-text"><pre>Международные<br/>финансы и банки</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='/areas/areas17'}>
                    <div className="departments-img-container">
                        <img src={areas17} style={{height: '400px', width: '560px'}} alt="Международная экономика" />
                        <div className="departments-text"><pre>Международная<br/>экономика</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>ПРОГРАММЫ ПЕРЕПОДГОТОВКИ</h2>

        <div className="container-departments">
            <div className="departments-items">
                <Link to="*">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas18} style={{height: '400px', width: '560px'}} alt="Бухгалтерский учет, анализ и аудит" />
                        <div className="departments-text"><pre>Бухгалтерский учет, анализ и<br/>аудит</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
                <div className="departments-item"  onClick={() => window.location.href='*'}>
                    <div className="departments-img-container">
                        <img src={areas19} style={{height: '400px', width: '560px'}} alt="Управление и экономика в здравоохранении" />
                        <div className="departments-text"><pre>Управление и экономика в<br/>здравоохранении</pre></div>
                        <button className="departments-button">Ещё</button>
                    </div>    
                </div>
            </div>
        </div>

        <h2 className={styles["h2-main"]}>АСПИРАНТУРА</h2>
        <div className="container-departments container-areas">
            <div className={styles["departments-areas"]}>
                <Link to="*">
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={areas20} style={{height: '400px', width: '560px'}} alt="Региональная и отраслевая экономика" />
                        <div className="departments-text text-areas">Региональная и<br/>отраслевая экономика</div>
                        <button className="departments-button">Ещё</button>
                    </div>
                </div>
                </Link>
            </div>
        </div>
       */} 
        
    </main>
    <Footer/>
    </> );
}
 
export default Areas;