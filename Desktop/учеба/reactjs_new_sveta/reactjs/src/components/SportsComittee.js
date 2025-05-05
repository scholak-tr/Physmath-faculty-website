import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import tomash from "./../img/tomash.jpg";

const Tradeunion = () => {
    return ( <>
    <Header />
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv" >
                    <span className="outlined-text" >
                    Спортивный комитет<br/>
                        Девиз: </span>Когда мы едины — мы непобедимы!<br/>
                    <span className="outlined-text">Председатель комитета:</span><br/>
                    Томашпольская Екатерина, 305 гр.<br/>
                    {/*<span className="outlined-text" >Зам. председателя:</span><br/>
                        Горчак Мария, 305 гр.*/}
                </p>
                <div className="history-image">
                    <img src={tomash} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Организация спортивных мероприятий на уровне факультета и университета;</li>
                    <li>Популяризация здорового образа жизни;</li>
                    <li>Организация тренировочного процесса в спортивных секциях;</li>
                    <li>Формирование сборных команд факультета;</li>
                    <li>Сотрудничество с Комитетом по физической культуре и спорту с целью повышения спортивной активности студентов;</li>
                    <li>Участие в республиканских спортивных мероприятиях.</li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Основные виды спорта, в которых можно принять участие:</span>
                <ul className="outlined-text__coursiv outlined-span" style={{fontSize:'20px'}}>
                    <span>
                        <li>Футбол</li>
                        <li>Волейбол</li>
                        <li>Баскетбол</li>
                    </span>
                    <span>
                        <li>Шашки</li>
                        <li>Шахматы</li>
                        <li>Бадминтон</li>
                    </span>
                    <span>
                        <li>Пейнтбол </li>
                        <li>Легкая атлетика</li>
                        <li>Настольный теннис</li>
                    </span>
                </ul>
            </p><br/>
        </div>
    <Footer />
    </>
    );
}
 
export default Tradeunion;