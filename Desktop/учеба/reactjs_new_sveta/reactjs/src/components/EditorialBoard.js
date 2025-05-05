import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import sterlikova from "./../img/sterlikova.jpg";

const Tradeunion = () => {
    return ( <>
    <Header />
    {/**
        <div className="outlined-container">
            <div className="outlined-flex">
                <div>
                    <p className="outlined-text" >Профбюро</p>
                    <p className="outlined-text__coursiv"><span className="outlined-text" >Девиз: </span>Жить для людей<br/> и ради людей!</p>
                </div>
                <div className="outlined-image">
                    <img src={branishte} />
                </div>
            </div>
            <div>
                <p className="outlined-text">Деятельность</p>
            </div>
        </div>
    */}

        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv" >
                    <span className="outlined-text" >
                    Редколлегия<br/>
                        Девиз: </span>Наша цель – наши <br/>новые возможности!<br/>
                    <span className="outlined-text">Председатель комитета:</span><br/>
                    Стерликова Ирина, 403 гр.<br/>
                    {/*<span className="outlined-text" >Зам. председателя:</span><br/>
                        Горчак Мария, 305 гр.*/}
                </p>
                <div className="history-image">
                    <img src={sterlikova} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Художественное оформление организуемых проектов и мерпоприятий факультета: разработка дизайна рекламных плакатов, информационных афиш, листовое и т.д.;</li>
                    <li>Оформление стендов факультета;</li>
                    <li>Фото- и видеосъемка различных мероприятий из жизни факультета и ВУЗа.</li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Члены комитета:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Посторонка Ксения, 101 группа</li>
                    <li>Якименко Екатерина,  101 группа</li>
                    <li>Красавцева Татьяна, 104 группа</li>
                    <li>Танасенко Анастасия, 104 группа</li>
                    <li>Трегубчак Анастасия, 104 группа</li>
                    <li>Ефодиева Алина, 106 группа</li>
                    <li>Жильцова Юлия, 303 группа</li>
                    <li>Цюх Дарья, 403 группа</li>
                    <li>Добровольская Екатерина, 405 группа</li>
                    <li>Плотян Анастасия, 405 група</li>
                </ul>
            </p><br/>
            </div>
    <Footer />
    </>
    );
}
 
export default Tradeunion;