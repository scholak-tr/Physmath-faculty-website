import React from 'react';
import Header from './Header';
import Footer from './Footer';
import shokot from "./../img/shokot.jpg";

const MediaComittee = () => {
    return (
        <>
        <Header/>
        
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv outlined-text__padding" >
                    <span className="outlined-text" >
                    Медиа Комитет
                        Девиз: </span>Информация – двигатель прогресса!<br/>
                    <span className="outlined-text">Председатель<br/><span style={{display:'block',textAlign:'right'}}>Комитета:</span></span>
                    Шокот Анастасия, 203 гр.<br/>
                    
                    <span className="outlined-text" >Заместитель председателя:</span><br/>
                    Алина Репида, 105 гр.   
                </p>
                <div className="history-image">
                    <img src={shokot} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Освещение деятельности Студенческого совета в СМИ на уровне факультета и университета;
                    </li>
                    <li>
                        Освещение деятельности профессорско-преподавательского состава и студентов на факультете и в рамках университета;
                    </li>
                    <li>
                        Своевременное оповещение студентов о проводимых мероприятиях на факультете и в рамках университета (различные мероприятия: «круглые столы», праздники и т.д.)
                    </li>
                </ul>
            </p>            
            <p className="outlined-text__coursiv" >
                    <span className="outlined-text" style={{display:'block', textAlign:'center', fontSize:'32px'}}>
                    Члены комитета</span><br/>
            </p>
            <div style={{display:'flex', gap:'2px', fontSize:'18px', fontStyle:'italic'}} >
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Ефодиева Алина</td>
                        <td>106</td>
                    </tr>
                    <tr>
                        <td>Репида Алина</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Димираш Юлия</td>
                        <td>107</td>
                    </tr>
                    <tr>
                        <td>Руссу Ксения</td>
                        <td>108</td>
                    </tr>  
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Студент</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Иванов Андрей</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>Щабельская Дарья</td>
                        <td>208</td>
                    </tr>
                    <tr>
                        <td>Макеева Екатерина</td>
                        <td>307</td>
                    </tr>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MediaComittee;