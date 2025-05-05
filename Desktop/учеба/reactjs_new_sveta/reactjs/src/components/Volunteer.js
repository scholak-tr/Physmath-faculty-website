import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import gorchak from "./../img/gorchak.jpg";

const Tradeunion = () => {
    return ( <>
    <Header />
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv outlined-text__padding" >
                    <span className="outlined-text " >
                    Волонтерское<br/><span style={{display:'block',textAlign:'right'}}> Движение</span>
                        Девиз: </span>Награда за доброе дело - в самом его совершении!<br/>
                    <span className="outlined-text">Лидер движения:</span><br/>
                    Горчак Мария, 305 гр.<br/>
                </p>
                <div className="history-image">
                    <img src={gorchak} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Организация благотворительных концертов как на факультете, так и в университете;
                    </li>
                    <li>
                        Формирование чувства нравственности, милосердия, самоотверженности и желание помогать;
                    </li>
                    <li>
                        Поездки в приюты для животных, детские дома, дома инвалидов и прочие организации;
                    </li>
                    <li>
                        Образовательные и экологические проекты, а также Донорства и Зоозащита;
                    </li>
                    <li>
                        Пропаганда здорового образа жизни, помощь в организации культурно-массовых мероприятий.
                    </li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Организации, которые мы посещаем:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Приют животных города Бендеры;</li>
                    <li>Детские дома в городах Бендеры и Тирасполь;</li>
                    <li>Дом-интернат для престарелых и инвалидов города Тирасполь;</li>
                    <li>ГУ ТО "Первомайский дом интернат" ;</li>
                    <li>ГУ "Республиканский специализированный дом ребёнка" .</li>
                </ul>
            </p><br/>
            <p className="outlined-text__coursiv" >
                    <span className="outlined-text" style={{display:'block', textAlign:'center', fontSize:'32px'}}>
                    Участники нашего движения:</span><br/>
            </p>
            <div style={{display:'flex', gap:'2px', fontSize:'18px', fontStyle:'italic'}} >
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Барба Анна Игоревна </td>
                        <td>201</td>
                    </tr>
                    <tr>
                        <td>Буду Валерия Григорьевна</td>
                        <td>202</td>
                    </tr>
                    <tr>
                        <td>Кандит Валерия Сергеевна </td>
                        <td>202</td>
                    </tr>
                    <tr>
                        <td>Кравченко Кира Сергеевна</td>
                        <td>204</td>
                    </tr>
                    <tr>
                        <td>Дрига Александр Леонидович</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Дабижа Никита Дмитриевич</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Гаина Илья Александрович </td>
                        <td>209</td>
                    </tr>
                    <tr>
                        <td>Лукьян Никита Иванович</td>
                        <td>301</td>
                    </tr>
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Захарова Оксана Сергеевна</td>
                        <td>305</td>
                    </tr>
                    <tr>
                        <td>Савва Алина Игоревна</td>
                        <td>305</td>
                    </tr>
                    
                    <tr>
                        <td>Тайборина Алена Николаевна</td>
                        <td>307</td>
                    </tr>
                    
                    <tr>
                        <td>Кизлярова Дарья Витальевна</td>
                        <td>307</td>
                    </tr>
                    <tr>
                        <td>Куликовская Алина Николаевна</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Добровольская Екатерина Владимировна</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Плотян Анастасия Васильевна</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Жосан Виктория Николаевна</td>
                        <td>406</td>
                    </tr>
                </table>
            </div>
        </div>
    <Footer />
    </>
    );
}
 
export default Tradeunion;