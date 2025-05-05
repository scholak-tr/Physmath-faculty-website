import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./../../css/main.css";

const Contacts = () => {
    return (<>
    <Header/>
    <div className="container-departments">
        <h1>Контакты</h1>
        <table className="contacts">
            <thead>
                <tr className="row3 ">
                    <td className="cell-1 td">Наименование структурного подразделения</td>
                    <td className="cell-2 td">Должность</td>
                    <td className="td">ФИО</td>
                    <td className="td">Номер телефона</td>
                    <td className="td">Адреса электронной почты</td>
                </tr>
            </thead>
            
            <tr>
                <td rowSpan={8} style={{verticalAlign: 'top'}}>Кафедра высшей и прикладной математики и информатики</td>
                <td>Кандидат физико-математических наук</td>
                <td>Васильева Ольга Федоровна</td>
                <td>533-79506</td>
                <td>vasilievaof@spsu.ru</td>
            </tr>
            <tr>
                
                <td className="cell-1">Заведующий кафедрой</td>
                <td>Коровай Александр Вальерьевич</td>
                <td>533-79532</td>
                <td>fmf_nokr@spsu.ru</td>
            </tr>
            <tr>
                
                <td>Заведующий кафедрой</td>
                <td>Берил Степан Иорданович</td>
                <td>533-79510</td>
                <td>ofimpf@yandex.ru</td>
            </tr>

      
        </table>
    </div>
    <Footer/>
    </>);
}
 
export default Contacts;