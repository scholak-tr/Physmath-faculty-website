import React from "react";
import styles from "./Rules.module.css";
import "./../../css/main.css";
import admission from "./../../img/admission.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RecruitPlan = () => {
    return ( <>
    <Header />
    <main className={styles["rules-main"]}>
        <p style={{textTransform:'uppercase', textAlign:'right'}}>проект</p>
        <p style={{textAlign:'center'}}>
            План<br/>
            приема абитуриентов на договорную (платную) основу обучения и за счет средств республиканского бюджета по образовательным программам экономического факультета <br/>
            ГОУ «Приднестровский государственный университет им. Т.Г. Шевченко» <br/>
            на 2025-2026 учебный год
        </p>
        <table className="contacts table-recruitplan">
            <tr>
                <td rowSpan={3}>№ п/п</td>
                <td rowSpan={3}>Наименование направления/специальности подготовки</td>
                <td rowSpan={3}>Наименование направления (профиля)/специальности подготовки</td>
                <td rowSpan={3}>Сроки обучения</td>
                <td colSpan={3}>Количество мест с возмещением затрат за обучение</td>
                <td colSpan={3}>Количество мест за счет средств республиканского бюджета</td>
                
            </tr>
            <tr>
                
                <td colSpan={3}>Формы обучения</td>
                <td colSpan={3}>Формы обучения</td>
            </tr>
            <tr>
                <td>Очная</td>
                <td>Заочная</td>
                <td>Очно-заочная</td>
                <td>Очная</td>
                <td>Заочная</td>
                <td>Очно-заочная</td>
            </tr>
            <tr>
                <td rowSpan={6}>1.</td>
                
                <td rowSpan={6}>5.38.03.01 Экономика (бакалавриат)</td>
                
            </tr>
            <tr>
                <td>Бухгалтерский учет, анализ и аудит</td>
                <td>4 года</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td className="row3 ">14</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>Внешнеэкономические связи и таможенный консалтинг</td>
                <td>4 года</td>
                <td>7</td>
                <td></td>
                <td></td>
                <td className="row3 ">3</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>Экономика и менеджмент</td>
                <td>4 года</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td className="row3 ">9</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>Финансы и кредит</td>
                <td>4 года</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td className="row3 ">7</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>Налоги и налоговый консалтинг</td>
                <td>4 года</td>
                <td>2</td>
                <td></td>
                <td></td>
                <td className="row3 ">8</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>2.</td>
                <td>5.38.03.02 Менеджмент (бакалавриат)</td>
                <td>Управление персоналом</td>
                <td>4 года</td>
                <td>6</td>
                <td></td>
                <td></td>
                <td className="row3 ">4</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td>3.</td>
                <td>5.38.03.05 Бизнес-информатика (бакалавриат)</td>
                <td>Применение и разработка информационных систем в экономике</td>
                <td>4 года</td>
                <td>10</td>
                <td></td>
                <td></td>
                <td className="row3 ">5</td>
                <td className="row3 "></td>
                <td className="row3 "></td>
            </tr>
            <tr>
                <td rowSpan={2}>4.</td>
                <td rowSpan={2}>5.38.04.01 Экономика (магистратура)</td>
                <td>Аудит и финансовый консалтинг</td>
                <td>2 года 6 месяцев</td>
                <td></td>
                <td>5</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">10</td>
                <td className="row3"></td>
            </tr>
            <tr>
                <td>Международная экономика</td>
                <td>2 года 6 месяцев</td>
                <td></td>
                <td>10</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3"></td>
                <td className="row3"></td>
                
            </tr>
            <tr>
                <td rowSpan={2}>5.</td>
                <td rowSpan={2}>5.38.04.02 Менеджмент (магистратура)</td>
                <td>Экономика и управление на предприятии /в организации/</td>
                <td>2 года 6 месяцев</td>
                <td></td>
                <td>10</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">5</td>
                <td className="row3"></td>
            </tr>
            <tr>
                <td>Управление и разработка информационными системами в экономике</td>
                <td>2 года 6 месяцев</td>
                <td></td>
                <td>10</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">1</td>
                <td className="row3"></td>
                
            </tr>
            <tr>
                <td>6.</td>
                <td>5.38.04.08 Финансы и кредит (магистратура)</td>
                <td>Финансовая экономика и монетарное регулирование</td>
                <td>2 года 6 месяцев</td>
                <td></td>
                <td>5</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">10</td>
                <td className="row3"></td>
            </tr>
            <tr>
                <td rowSpan={2}>7.</td>
                <td rowSpan={2}>5.38.05.01 Экономическая безопасность (специалитет)</td>
                <td>Экономико-правовое обеспечение экономической безопасности</td>
                <td>5 лет/6 лет</td>
                <td>5</td>
                <td>20</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">10</td>
                <td className="row3"></td>
            </tr>
            <tr>
                <td>Финансово-экономическая безопасность</td>
                <td>5 лет/6 лет</td>
                <td>10</td>
                <td>20</td>
                <td></td>
                <td className="row3"></td>
                <td className="row3">5</td>
                <td className="row3"></td>
                
            </tr>
            <tr style={{fontWeight:'bold'}}>
                <td colSpan={4} style={{textAlign:'right'}}>ИТОГО</td>
                <td>55</td>
                <td>80</td>
                <td>0</td>
                <td className="row3">65</td>
                <td className="row3">26</td>
                <td className="row3">0</td>
    
            </tr>
        </table>

        <p style={{textAlign:'center'}}>
        План приема абитуриентов на договорную (платную) основу обучения и за счет средств<br/>
        республиканского бюджета по образовательным программам профессионального образования в<br/>
            ГОУ «Приднестровский государственный университет им. Т.Г. Шевченко» <br/>
            на 2025-2026 учебный год
        </p> 

        <table className="contacts table-recruitplan">
            <tr>
                <td rowSpan={3}>№ п/п</td>
                <td rowSpan={3}>Специальность</td>
                <td colSpan={3}>Количество мест с возмещением затрат за обучение</td>
                <td colSpan={3}>Количество мест за счет средств республиканского бюджета</td>
            </tr>
            <tr>
                
                <td colSpan={3}>Формы обучения</td>
                <td colSpan={3}>Формы обучения</td>
            </tr>
            <tr>
                <td>Очная</td>
                <td>Заочная</td>
                <td>Очно-заочная</td>
                <td>Очная</td>
                <td>Заочная</td>
                <td>Очно-заочная</td>
            </tr>
            <tr>
                <td colSpan={8}>по программам дополнительного профессионального образования профессиональной переподготовки</td>
                
            </tr>
            <tr>
                <td>1.</td>
                <td>Управление и экономика здравоохранения</td>
                <td></td>
                <td>15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Бухгалтерский учет, анализ и аудит (по отраслям)</td>
                <td></td>
                <td>8</td>
                <td></td>
                <td></td>
                <td>7</td>
                <td></td>
            </tr>
            <tr style={{fontWeight:'bold'}}>
                <td colSpan={2} style={{textAlign:'right'}}>ИТОГО</td>
                <td></td>
                
                <td></td>
                <td>23</td>
                <td></td>
                <td>7</td>
                <td></td>
            </tr>
        </table>
        
        <div className="container-departments">
            <div className="rules-items">
                <a href="https://drive.google.com/file/d/1K90Ef7-n0XEB7LDGppH8s1iscuw_oXxF/view?usp=sharing" target="_blank" >
                <div className="departments-item" >
                    <div className="departments-img-container">
                        <img src={admission} style={{height: '400px', width: '560px'}} alt="План набора" />
                        <div className="departments-text">План набора</div>
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
 
export default RecruitPlan;