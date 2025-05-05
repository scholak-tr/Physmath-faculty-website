import React from "react";
import "./../../css/main.css";
import decan from "./../../img/decan1.png";
import pavlin from "./../../img/decan1.png";
import bosiuk from "./../../img/decan1.png";
import formus from "./../../img/decan1.png";
import markov from "./../../img/decan1.png";
import tkachenko from "./../../img/decan1.png";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

const Management = () => {
    return ( <>
    <Header />
    <div className="container-management">
            <h1 className="h1-management">Руководство</h1>
            <div className="container-management__items">
                <div className="management__item">
                    <img src={decan} style={{width: '280px', height: '250px'}}/>
                    <div className="management__item-text">
                        <h3 className="management-name black">Коровай Александр Валерьевич</h3>
                         <h4 className="grou">Заведующий кафедрой</h4>
                        <h5>Кандидат физико-математических наук, доцент
                           
                        </h5>
                    </div>
                </div>

                <div className="management__item">
                    <img src={pavlin} style={{width: '280px', height: '250px'}} />
                    <div className="management__item-text">
                        <h3 className="management-name blue">Ворническу Галина Ивановна</h3>
                        <h4 className="grou"> Кандидат физико-математических наук
                        </h4>
                        <h5> 
                            Доцент. Заместитель декана по воспитательной работе
                        </h5>
                    </div>
                </div>

                <div className="management__item">
                    <img src={markov} style={{width: '280px', height: '250px'}} />
                    <div className="management__item-text">
                        <h3 className="management-name blue">Марков Дмитрий Александрович</h3>
                        <h4 className="grou"> Кандидат физико-математических наук
                        </h4>
                        <h5> 
                            Доцент.Начальник
                        </h5>
                    </div>
                </div>

                <div className="management__item">
                    <img src={bosiuk} style={{width: '280px', height: '250px'}} />
                    <div className="management__item-text">
                        <h3 className="management-name blue">Запольская Ольга Юрьевна</h3>
                        <h4 className="grou">Старший преподаватель</h4>
                        
                    </div>
                </div>

                <div className="management__item">
                    <img src={formus} style={{width: '280px', height: '250px'}} />
                    <div className="management__item-text">
                        <h3 className="management-name blue">Надькин Леонид Юрьевич</h3>
                        <h4 className="grou">Кандидат физико-математических наук</h4>
                        <h5>
                        Доцент
Старший.Научный сотрудник.
И.о. заведующего кафедрой
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
     );
}
 
export default Management;