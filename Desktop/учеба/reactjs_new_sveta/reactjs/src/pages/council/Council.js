import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import "./../../css/main.css";
//import Newscouncil from "./Newscouncil";

const Council = () => {
    return ( 
        <>
        <Header />
        <h1 className="h1-council">Профессорско-преподавательский состав и сотрудники</h1>
        <div className="container-council">
            <div className="item">
                <span className="position">Преподаватель</span>
                <h3 className="name-council">Бойко Анна Дмитриевна</h3>
                <span className="title">Кафедра высшей и прикладной математики и информатики</span>
            </div>
            <div className="item">
                <span className="position">Старший преподаватель</span>
                <h3 className="name-council">Васильев Виталий Васильевич</h3>
                <span className="title">Кафедра высшей и прикладной математики и информатики</span>
            </div>
            <div className="item">
                <span className="position">Доцент. Заместитель декана по воспитательной работе</span>
                <h3 className="name-council">Ворническу Галина Ивановна</h3>
                <span className="title">Кафедра высшей и прикладной математики и информатики</span>
            </div>
            <div className="item">
                <span className="position">Преподаватель</span>
                <h3 className="name-council">Гощина Наталья Николаевна</h3>
                <span className="title">Кафедра высшей и прикладной математики и информатики</span>
            </div>
            <div className="item">
                <span className="position">Доцент. Заместитель декана по воспитательной работе</span>
                <h3 className="name-council">Ворническу Галина Ивановна</h3>
                <span className="title">Кафедра высшей и прикладной математики и информатики</span>
            </div>
            
        </div>
        {/*<Newscouncil /> */}        
        <Footer />
        </>
     );
}
 
export default Council;