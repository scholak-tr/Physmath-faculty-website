import React from "react";
import { withNavigation } from "../../components/withNavigation";
import "./../../css/main.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import quarcode from "./../../img/quarcode.png";
import payment from "./../../img/payment.png";

const ApplicnewsDetail = () => {
    const location = useLocation();
    const {news} = location.state || {};

    return ( <div className="name">
        <Header/>
        <main>
            {news ? (<div className="applicnews-container"> 
                <h2 style={{lineHeight:'2'}}>{news.h1}</h2>
                <p>{news.date}</p>
                <div className="imageapplic">
                    <img src={news.imageSrc} style={{maxWidth: '450px', marginBottom: '20px'}}/>
                </div>
                <h3 style={{lineHeight:'1.5', color:'black'}}>Уважаемые выпускники общеобразовательных и профессиональных учебных заведений и их родители!</h3>
                <p><br/>
                Приднестровский государственный университет им. Т.Г. Шевченко <span style={{fontWeight: 'bold'}}>{news.span1}</span> проводит <span style={{fontWeight: 'bold'}}>{news.span2} тестирование</span> для желающих поступить в университет.
                </p><br/>
                <p>При успешной сдаче тестирования выдаются сертификаты.</p><br/>
                <p>Выпускники, предоставившие сертификаты при подаче документов для поступления, по их желанию, могут быть освобождены от вступительных испытаний в университете.</p><br/>
                <p>Прием заявлений на предварительное тестирование осуществляется<span style={{fontWeight: 'bold'}}>{news.span3}</span> ежедневно с 9 до 17 часов (обед – с 12 до 13 часов), в субботу и воскресенье – выходной.</p><br/>
                <ul style={{listStyleType: 'none', lineHeight: '2'}}>Заявления принимаются лично от желающих участвовать в предварительном тестировании или онлайн:
                    <li style={{fontWeight: 'bold'}}>- город Тирасполь, ПГУ им. Т.Г. Шевченко, ул. 25 Октября, 128, корпус №1, кабинет №106, телефон: (0533) 7-95-05;
                    </li><br/>
                    <li style={{fontWeight: 'bold'}}>- город Бендеры, Бендерский филиал ПГУ им. Т.Г. Шевченко, ул. Бендерского восстания, 7, корпус А, кабинет №25, телефон: (0552) 6-09-63;</li><br/>
                    <li style={{fontWeight: 'bold'}}>- город Рыбница, Рыбницкий филиал ПГУ им. Т.Г. Шевченко, ул. Гагарина, 5, корпус Д, кабинет №7, телефон: (0555) 2-08-48.</li><br/>
                </ul>
                <p>
                При оформлении заявления <span style={{fontWeight: 'bold'}}>лично</span> необходимо при себе иметь <span style={{fontWeight: 'bold'}}>паспорт (свидетельство о рождении)</span>.
                </p><br/>
                <div><img src={quarcode} style={{width: '450px'}}/></div>
                <br/>
                <p>При оформлении заявления <span style={{fontWeight: 'bold'}}>онлайн</span> необходимо пройти регистрацию по ссылке:</p>
                <p><a href="https://forms.yandex.ru/u/65f04110c417f3091160e9d6/" style={{textDecoration:'none', color:'#ffa78d'}} target="_blank">https://forms.yandex.ru/u/65f04110c417f3091160e9d6/.</a></p>
                <br/>
                <p>Записаться можно в городе Тирасполь не более чем на 3 профильных предмета, в филиалах - не более, чем на 2 профильных предмета.</p><br/>
                <p>При регистрации онлайн необходимо прикрепить фото квитанции об оплате.</p><br/>
                <p>Оплата за предварительное тестирование производится в любом отделении банка Приднестровской Молдавской Республики на счет Приднестровского государственного университета им. Т.Г. Шевченко. Квитанцию об оплате следует сохранить до окончания предварительного тестирования.</p><br/>
                <p style={{fontWeight: 'bold'}}>Реквизиты для оплаты:</p>
                <img src={payment} style={{width: '500px'}}/>
                <p><span style={{textTransform:'uppercase', fontWeight:'bold'
                }}>Планируемое расписание предварительного тестирования</span></p><br/>
                <span style={{textTransform:'uppercase', fontWeight:'bold'
                }}>Тирасполь</span><br/><br/>
                <table>
                    <thead className="row3">
                        <td className="cell-1 td">Дата</td>
                        <td className="cell-2 td">День недели</td>
                        <td className="td">Предметы</td>
                    </thead>
                    <tr>
                        <td>{news.dateT1}</td>
                        <td>{news.dayT1}</td>
                        <td>{news.examT1}</td>
                    </tr>
                    <tr>
                        <td>{news.dateT2}</td>
                        <td>{news.dayT2}</td>
                        <td>Резервный день</td>
                    </tr>
                </table>
                <br/>
                <span style={{textTransform:'uppercase', fontWeight:'bold'
                }}>Рыбница</span><br/><br/>
                <table>
                    <thead className="row3">
                        <td className="cell-1 td">Дата</td>
                        <td className="cell-2 td">День недели</td>
                        <td className="td">Предметы</td>
                    </thead>
                    <tr>
                        <td>{news.dateR1}</td>
                        <td>{news.dayR1}</td>
                        <td>{news.examR1}</td>
                    </tr>
                    <tr>
                        <td>{news.dateR2}</td>
                        <td>{news.dayR2}</td>
                        <td>Резервный день</td>
                    </tr>
                </table>
                <br/>
                <span style={{textTransform:'uppercase', fontWeight:'bold'
                }}>Бендеры</span><br/><br/>
                <table>
                    <thead className="row3">
                        <td className="cell-1 td">Дата</td>
                        <td className="cell-2 td">День недели</td>
                        <td className="td">Предметы</td>
                    </thead>
                    <tr>
                        <td>{news.dateB1}</td>
                        <td>{news.dayB1}</td>
                        <td>{news.examB1}</td>
                    </tr>
                    <tr>
                        <td>{news.dateB2}</td>
                        <td>{news.dayB2}</td>
                        <td>Резервный день</td>
                    </tr>
                </table>

            </div>) : (<p>Новость не найдена</p>)}
        </main>
        <Footer/>
    </div> );
}
 
export default withNavigation(ApplicnewsDetail);