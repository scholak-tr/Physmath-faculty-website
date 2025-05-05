import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import branishte from "./../img/Branishte.jpg";

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
                <p className="outlined-text__coursiv outlined-text__padding" >
                    <span className="outlined-text" >
                        Профбюро<br/>
                        Девиз: </span>Жить для людей и ради людей!<br/>
                    <span className="outlined-text">Председатель комитета:</span><br/>
                        Браниште Валерия, 406 гр.<br/>
                    <span className="outlined-text" >Заместитель председателя:</span><br/>
                        Горчак Мария, 305 гр.
                </p>
                <div className="history-image">
                    <img src={branishte} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Оказание социальной поддержки, информационно-правовая база:
                        <ul style={{fontSize:'16px'}}>
                            <li>Представительство, защита учебных прав и интересов студентов;</li>
                            <li>Выделение материальной помощи студентам;</li>
                            <li>Оказание консультаций по интересующим вопросам различного характера (учебного, жилищно-бытового и т.п.)</li>
                        </ul>
                    </li>
                    <li>Поддержка творческих и научных студенческих инициатив:
                        <ul style={{fontSize:'16px'}}>
                            <li>Проведение конкурсов, раскрывающих способности студентов;</li>
                            <li>Поддержка в продвижении идей, инициированных студентами</li>
                        </ul>
                    </li>
                    <li>Организация досуга, культурно-массовая и спортивная деятельности:
                        <ul style={{fontSize:'16px'}}>
                            <li>Помощь в организации, спонсорская поддержка и проведение различных мероприятий (слетов, фестивалей, КВН и т.п.);</li>
                            <li>Проведение экскурсионных поездок;</li>
                            <li>Организация, предоставление скидок на походы в кино, театр, боулинг, клубы и многое другое</li>
                        </ul>
                    </li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>В компетенцию профоргов группы входит:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Проведение собраний группы;</li>
                    <li>Информирование о деятельности профбюро и профкома;</li>
                    <li>Разъяснение прав и обязанностей организации;</li>
                    <li>Организации проведение досуга для группы;</li>
                    <li>Сбор информации о социальном положении членов организации в группе и наличии льгот;</li>
                    <li>Консультирование студентов группы по вопросам, касающимся деятельности профбюро факультета.</li>
                </ul>
            </p><br/>
            <p className="outlined-text__coursiv" >
                    <span className="outlined-text" style={{display:'block', textAlign:'center', fontSize:'32px'}}>
                    Список профоргов групп экономического факультета 2024-2025 учебного года.</span><br/>
            </p>
            <div style={{display:'flex', gap:'2px', fontSize:'18px', fontStyle:'italic'}} >
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Профорг</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Якименко Екатерина</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <td>Грекул Оксана</td>
                        <td>102</td>
                    </tr>
                    <tr>
                        <td>Шонц Екатерина</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <td>Лукьянчук Алла</td>
                        <td>104</td>
                    </tr>
                    <tr>
                        <td>Спанаке Ирина</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Навал Мария</td>
                        <td>106</td>
                    </tr>
                    <tr>
                        <td>Димитраш Юлия</td>
                        <td>107</td>
                    </tr>
                    <tr>
                        <td>Погребан Ирина</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>Розумная Анна</td>
                        <td>109</td>
                    </tr>
                    <tr>
                        <td>Войцеховская Арина</td>
                        <td>201</td>
                    </tr>
                    <tr>
                        <td>Кандит Валерия</td>
                        <td>202</td>
                    </tr>
                    <tr>
                        <td>Мотынга Анастасия</td>
                        <td>203</td>
                    </tr>
                    <tr>
                        <td>Байран Александр</td>
                        <td>204</td>
                    </tr>
                    <tr>
                        <td>Готорничан Ксения</td>
                        <td>205</td>
                    </tr>
                    <tr>
                        <td>Дрига Александр</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Кураш Николай</td>
                        <td>207</td>
                    </tr>
                    <tr>
                        <td>Щабельская Дарья</td>
                        <td>208</td>
                    </tr>
                    <tr>
                        <td>Игнатьева Дарья</td>
                        <td>209</td>
                    </tr>
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Профорг</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Рустамов Рустам</td>
                        <td>301</td>
                    </tr>
                    <tr>
                        <td>Спиян Екатерина</td>
                        <td>302</td>
                    </tr>
                    
                    <tr>
                        <td>Денисова Юлия</td>
                        <td>303</td>
                    </tr>
                    
                    <tr>
                        <td>Балан Кристина</td>
                        <td>304</td>
                    </tr>
                    <tr>
                        <td>Горчак Мария</td>
                        <td>305</td>
                    </tr>
                    <tr>
                        <td>Архипова Кристина</td>
                        <td>306</td>
                    </tr>
                    <tr>
                        <td>Миронченко Мария</td>
                        <td>307</td>
                    </tr>
                    <tr>
                        <td>Гончарук Владислава</td>
                        <td>308</td>
                    </tr>
                    <tr>
                        <td>Стукалова Александра</td>
                        <td>401</td>
                    </tr>
                    <tr>
                        <td>Давискиба Ангелина</td>
                        <td>402</td>
                    </tr>
                    <tr>
                        <td>Цюх Дарья</td>
                        <td>403</td>
                    </tr>
                    <tr>
                        <td>Стратулат Симона</td>
                        <td>404</td>
                    </tr>
                    <tr>
                        <td>Неумыванная Валерия</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Репида Артём</td>
                        <td>406</td>
                    </tr>
                    <tr>
                        <td>Самчук Елизавета</td>
                        <td>407</td>
                    </tr>
                    <tr>
                        <td>Борносуз Ксения</td>
                        <td>408</td>
                    </tr>
                    <tr>
                        <td>Бехер Алина</td>
                        <td>506</td>
                    </tr>
                </table>
            </div>
        </div>
    <Footer />
    </>
    );
}
 
export default Tradeunion;