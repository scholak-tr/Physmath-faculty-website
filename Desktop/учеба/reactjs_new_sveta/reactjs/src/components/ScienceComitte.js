import React from "react"
import Header from "./Header";
import Footer from "./Footer";
//import Users from "./Users";
import gilcova from "./../img/gilcova.jpg";

const ScienceComitte = () => {
    return ( <>
    <Header />
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv" >
                    <span className="outlined-text" >
                    Научный комитет<br/>
                        Девиз: </span>Развивайтесь! Всегда стремитесь выше! Вы не будете расти, если не будете пытаться совершить что-то за пределами того, что Вы уже знаете в совершенстве.<br/>
                    <span className="outlined-text">Председатель комитета:</span><br/>
                        Жильцова Юлия, 303 гр.<br/>
                    {/*<span className="outlined-text" >Зам. председателя:</span><br/>
                        Горчак Мария, 305 гр.*/}
                </p>
                <div className="history-image">
                    <img src={gilcova} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>Ведение научно-исследовательской деятельности и привлечение к ней студентов;</li>
                    <li>Информирование студентов о научных кружках, семинарах, конференциях, круглых столах;</li>
                    <li>Привитие навыков в области научно-исследовательной работы во всех ее видах и формах;</li>
                    <li>Участие в научных конференциях, конкурсах, олимптадах, подготовка научных публикаций студентов.</li>
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
                        <td>Валла Дмитрий</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <td>Почтарь Иван</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Ефодиева Алина</td>
                        <td>106</td>
                    </tr>
                    <tr>
                        <td>Погребан Ирина</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>Руссу Ксения</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>Кузнецова Юлия</td>
                        <td>109</td>
                    </tr>
                    <tr>
                        <td>Шокот Анастасия</td>
                        <td>203</td>
                    </tr>
                    <tr>
                        <td>Кравченко Кира</td>
                        <td>204</td>
                    </tr>
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Будду Валерия</td>
                        <td>207</td>
                    </tr>
                    <tr>
                        <td>Турей Дмитрий</td>
                        <td>303</td>
                    </tr>
                    
                    <tr>
                        <td>Макеева Екатерина</td>
                        <td>307</td>
                    </tr>
                    
                    <tr>
                        <td>Стерликова Ирина</td>
                        <td>403</td>
                    </tr>
                    <tr>
                        <td>Добровольская Екатерина</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Браниште Валерия</td>
                        <td>406</td>
                    </tr>
                    <tr>
                        <td>Шпирка Артур</td>
                        <td>408</td>
                    </tr>
                </table>
            </div>
        </div>
    <Footer />
    </>
    );
}
 
export default ScienceComitte;