import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import brigko from "./../img/brigko.jpg";

const CreativeComittee = () => {
    return ( <>
    <Header />
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv outlined-text__padding" >
                    <span className="outlined-text" >
                    Творческий<br/><span style={{display:'block',textAlign:'right'}}>Комитет</span>
                        Девиз: </span>Твочество – это высокий подвиг, а подвиг требует жертв.<br/>
                    <span className="outlined-text">Председатель комитета:</span><br/>
                    Брыжко Дарья, 305 гр.<br/>
                </p>
                <div className="history-image">
                    <img src={brigko} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Организация досуга студентов вуза и факультета;</li>
                    <li>Повышение уровня духовной культуры студентов;</li>
                    <li>Проведение культурно-массовых мероприятий на уровне факультета и университета;</li>
                    <li>Привлечение студентов к участию в проводимых мероприятиях;</li>
                    <li>Раскрытие творческого потенциала студентов.</li>
                </ul>
            </p> 
            
            <p className="outlined-text__coursiv" >
                    <span className="outlined-text" style={{display:'block', textAlign:'center', fontSize:'32px'}}>
                    Члены комитета:</span><br/>
            </p>
            <div style={{display:'flex', gap:'2px', fontSize:'18px', fontStyle:'italic'}} >
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Буду Валерия</td>
                        <td>202</td>
                    </tr>
                    <tr>
                        <td>Дабида Никита</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Дрига Александр</td>
                        <td>206</td>
                    </tr>
                    
                    <tr>
                        <td>Гаина Илья</td>
                        <td>209</td>
                    </tr>
                    <tr>
                        <td>Стерликова Ирина</td>
                        <td>303</td>
                    </tr>
                    
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студентг</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Полищук Наталья</td>
                        <td>306</td>
                    </tr>
                    <tr>
                        <td>Холоденко Валерия</td>
                        <td>401</td>
                    </tr>
                    
                    <tr>
                        <td>Добровольская Екатерина</td>
                        <td>405</td>
                    </tr>
                    
                    <tr>
                        <td>Репида Артём</td>
                        <td>406</td>
                    </tr>
                    
                </table>
            </div>
        </div>
    <Footer />
    </>
    );
}
 
export default CreativeComittee;