import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Users from "../../components/Users";
import repida from "./../../img/repida.jpg";

const Studentelder = () => {
    return (
        <>
        <Header/>
        
        <div className="container outlined-container" style={{padding:'40px 80px', margin:'50px auto'}}>
            <div className="history">
                <p className="outlined-text__coursiv outlined-text__padding" >
                    <span className="outlined-text" >
                        Студенческий<br/><span style={{display:'block',textAlign:'right'}}>Cовет</span>
                        Девиз: </span>Студенты - будущее страны!<br/>
                    <span className="outlined-text">Студенческий<br/>декан:</span><br/>
                        Репида Артем, 406 гр.<br/>
                    {/**
                     * <span className="outlined-text" >Зам. председателя:</span><br/>
                        Горчак Мария, 305 гр.
                     */}    
                </p>
                <div className="history-image">
                    <img src={repida} className="righting" width="360px" style={{borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}/>
                </div>
            </div>
            <br/>
            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Деятельность:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Осуществляет текущее руководство деятельности старостата и самоуправления студентов;
                    </li>
                    <li>
                        Организует и контролирует реализацию программ и проектов, утвержденных старостатом;
                    </li>
                    <li>
                        Имеет право принятия оперативных решений, касающихся деятельности старостата, подписывает его Положение и Постановления;
                    </li>
                    <li>
                        Выносит на рассмотрение руководством факультета рукомендации о поощерении студентов за активную научную и общественную работу;
                    </li>
                    <li>
                        Председатель старостата факультета принимает обязательное участие в деятельности ОБЪЕДИНЕННОГО СТУДЕНЧЕСКОГО СОВЕТА ФАКУЛЬТЕТОВ (ОССФ) – общеуниверситетской студенческой общественной организации.
                    </li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Основными задачами ОССФ являются:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Содействие учебной, научной и творческой деятельности студентов;
                    </li>
                    <li>
                        Сохранение и развитие демократических традиций студенчества;
                    </li>
                    <li>
                        Содействие структурным подразделениям в проводимых или мероприятиях в рамках образовательного процесса;
                    </li>
                    <li>
                        Организация культурно-просветительской, физкультурно-массовой и досуговой деятельности студентов университета;
                    </li>
                    <li>
                        Содействие реализации общественно значимых молодежных инициатив.
                    </li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>Функции ОССФ:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Руководит деятельностью студенческих советов факультетов и институтов;
                    </li>
                    <li>
                        Разрабатывает, принимает и реализует меры по координации всех сфер студенческой жизни;
                    </li>
                    <li>
                        Осуществляет выполнение иных функций в соответствии с изложенными задачами.
                    </li>
                </ul>
            </p> 

            <p>
                <span className="outlined-text" style={{display:'block', textAlign:'center'}}>В компетенцию старост группы входит:</span>
                <ul className="outlined-text__coursiv" style={{fontSize:'20px'}}>
                    <li>
                        Быть организатором в группе, показывать пример в учебе, занимать принципиально активную позицию во всех делах группы;
                    </li>
                    <li>
                        Посещение старостатов;
                    </li>
                    <li>
                        Информировать студентов группы о месте и времени проведения зачетов, экзаменов, производственной практики;
                    </li>
                    <li>
                        Своевременное заполнение журнала;
                    </li>
                    <li>
                        Информирование о мероприятиях, акциях, конкурсах;
                    </li>
                    <li>
                        Организация и проведение досуга для группы;
                    </li>
                    <li>
                        Организация в группе дисциплины
                    </li>
                    <li>
                        Консультирование студентов группы по вопросам, касающихся учебного и вне учебного процесса;
                    </li>
                    <li>
                        Выполнять все указания деканата и куратора. 
                    </li>
                </ul>
            </p>

            <p className="outlined-text__coursiv" >
                    <span className="outlined-text" style={{display:'block', textAlign:'center', fontSize:'32px'}}>
                    Список старост групп экономического факультета 2024-2025 учебного года.</span><br/>
            </p>
            <div style={{display:'flex', gap:'2px', fontSize:'18px', fontStyle:'italic'}} >
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Староста</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Маракуца Станислав Андреевич</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <td>Бровди Виктория Андреевна</td>
                        <td>102</td>
                    </tr>
                    <tr>
                        <td>Валла Дмитрий Сергеевич</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <td>Трегубчак Анастасия Ивановна</td>
                        <td>104</td>
                    </tr>
                    <tr>
                        <td>Почтарь Иван Олегович</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Ефодиева Алина Витальевна</td>
                        <td>106</td>
                    </tr>
                    <tr>
                        <td>Димитраш Юлия Александровна</td>
                        <td>107</td>
                    </tr>
                    <tr>
                        <td>Русу Ксения Ивановна</td>
                        <td>108</td>
                    </tr>
                    <tr>
                        <td>Кузнецова Юлия Витальевна</td>
                        <td>109</td>
                    </tr>
                    <tr>
                        <td>Кострицкая Дарья Игоревна</td>
                        <td>201</td>
                    </tr>
                    <tr>
                        <td>Буду Валерия Григорьевна</td>
                        <td>202</td>
                    </tr>
                    <tr>
                        <td>Мухамед Мадина Алишеровна</td>
                        <td>203</td>
                    </tr>
                    <tr>
                        <td>Кравченко Кира Сергеевна</td>
                        <td>204</td>
                    </tr>
                    <tr>
                        <td>Рабошапка Алина Евгеньевна</td>
                        <td>205</td>
                    </tr>
                    <tr>
                        <td>Дабижа Никита Дмитриевич</td>
                        <td>206</td>
                    </tr>
                    <tr>
                        <td>Григораш Алена Григорьевна</td>
                        <td>207</td>
                    </tr>
                    <tr>
                        <td>Ганенко Анастасия Андреевна</td>
                        <td>208</td>
                    </tr>
                    <tr>
                        <td>Чернышова Полина Олеговна</td>
                        <td>209</td>
                    </tr>
                </table> 
                <table>
                    <tr className="outlined-text__coursiv">
                        <td>Староста</td>
                        <td>Группа</td>
                    </tr>
                    <tr>
                        <td>Гайдаржий Виктория Сергеевна</td>
                        <td>301</td>
                    </tr>
                    <tr>
                        <td>Шолпан Валерия Валерьевна</td>
                        <td>302</td>
                    </tr>
                    
                    <tr>
                        <td>Турей Дмитрий Сергеевич</td>
                        <td>303</td>
                    </tr>
                    
                    <tr>
                        <td>Гицман Марина Сергеевна</td>
                        <td>304</td>
                    </tr>
                    <tr>
                        <td>Брыжко Дарья Ивановна</td>
                        <td>305</td>
                    </tr>
                    <tr>
                        <td>Полищук Наталья Геннадьевна</td>
                        <td>306</td>
                    </tr>
                    <tr>
                        <td>Макеева Екатерина Андреевна</td>
                        <td>307</td>
                    </tr>
                    <tr>
                        <td>Лупу Ирина Димовна</td>
                        <td>308</td>
                    </tr>
                    <tr>
                        <td>Прокопьева Екатерина Николаевна</td>
                        <td>401</td>
                    </tr>
                    <tr>
                        <td>Давискиба Ангелина Александровна</td>
                        <td>402</td>
                    </tr>
                    <tr>
                        <td>Стерликова Ирина Константиновна</td>
                        <td>403</td>
                    </tr>
                    <tr>
                        <td>Леонтьева Карина Михайловна</td>
                        <td>404</td>
                    </tr>
                    <tr>
                        <td>Павалаки Надежда Ивановна</td>
                        <td>405</td>
                    </tr>
                    <tr>
                        <td>Токарчук Анастасия Дмитриевна</td>
                        <td>406</td>
                    </tr>
                    <tr>
                        <td>Чернова Диана Викторовна</td>
                        <td>407</td>
                    </tr>
                    <tr>
                        <td>Коваль Наталья Игоревна</td>
                        <td>408</td>
                    </tr>
                    <tr>
                        <td>Егошина Анна Андреевна</td>
                        <td>506</td>
                    </tr>
                </table>
            </div>
        </div>

        <main>
        <div className="container-newscouncil">
            <Users type = "СТАРОСТАТ" title = "Новости"/>
        </div>

        </main>
        <Footer/>
        </>
    )
}

export default Studentelder;