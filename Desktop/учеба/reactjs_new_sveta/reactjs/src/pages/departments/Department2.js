import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./../../css/main.css";
/*import stasiuk from "./../../img/stasiuk.png";
import bosuk from "./../../img/decan1.png";
import formus from "./../../img/formus.png";
import mur from "./../../img/mur.png";
import zelenin from "./../../img/zelenin.png";
import poctar from "./../../img/poctar.jpg";
import trushin from "./../../img/trushin.png";*/
import stasuk_1 from "./../../img/BuchUch/stasuk_1.png";
import Dep from "./Dep";
import DepTable from "./DepTable";

const Department2 = () => {
    const allDepartments = Dep();
    const buchuchDepartment = allDepartments.find(department => department.departmentTitle === "Кафедра бухгалтерского учета и аудита")
    return ( <>
    <Header />
    <div className="container-departments">
    <h1>Кафедра бухгалтерского учета и аудита</h1>
            <div className="department1">
                <p>
                <ul>
                    <li>3300, г. Тирасполь, бульвар Гагарина 2, каб. №</li>
                    <li>533-79470</li>
                    <li>kafedrabypgu@yandex.ru</li>
                </ul>
                Дата основания: 1990.<br/>
                С августа 1991 года кафедру возглавлял д.э.н., профессор <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Якушенко В.Г.</span><br/>
                До 1 сентября 2013 года кафедру возглавлял к.э.н., доцент <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Смоленский Н.Н.</span><br/>
                К работе на кафедре привлекаются высококвалифицированные специалисты народного хозяйства, имеющие большой стаж практической работы.
                Кафедрой подготовлено и выпущено свыше 1000 специалистов, из которых свыше 500 человек обучались по дневной форме обучения и свыше 500 человек – по заочной форме обучения.<br/>
                Выпускники кафедры работают бухгалтерами, экономистами на предприятиях, в учреждениях и организациях различных отраслей народного хозяйства Приднестровской Молдавской Республики, а также за пределами республики.
                </p>
                <figure>
                    <img src={stasuk_1} className="righting" width="400px" />
                    <figcaption style={{lineHeight: '2'}}><span style={{color: '#43a5ee', fontWeight: 'bold'}}>Стасюк Татьяна Петровна</span>, кандидат экономических наук, доцент, заведующий кафедрой</figcaption>
                </figure>
            </div>
            <br/>
            <p>
            </p>
            <br/>          
            <p><span style={{color: '#43a5ee', fontWeight: 'bold'}}>В частности это:</span>
            <ul>
                <li><i>Предприятия и организации крупного, среднего малого бизнеса различных отраслей народного хозяйства (промышленность, строительство, сельское хозяйство, сфера услуг и т.д.);</i></li>
                <li><i>Бюджетные учреждения;</i></li>
                <li><i>Банки;</i></li>
                <li><i>Аудиторские компании.</i></li>
            </ul>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Специальности подготовки дипломированных специалистов:<br/>
            направления подготовки бакалавров:</span>
            <ul>
                <li>Направление: <em>Экономика (38.03.01)</em></li>
                <li>Профиль: <em>Бухгалтерский учет, анализ, аудит</em></li>
            </ul><br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направления подготовки специалистов:</span><br/>
            <ul style={{listStyleType: 'none'}}>
                <li>Направление: <em>Экономическая безопасность (38.05.01)</em></li>
                <li>Профиль: <em>Экономико-правовое обеспечение экономической безопасности</em></li>
            </ul>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направления подготовки магистрантов:</span><br/>
            <ul style={{listStyleType: 'none'}}>
                <li>Направление: <em>Экономика (38.04.01)</em></li>
                <li>Магистерские программы:</li>
                {/*<li><em>Бухгалтерский учёт, анализ и аудит в отраслях экономики</em></li>*/}
                <li><em>Аудит и финансовый консалтинг</em></li>
            </ul>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Программа переподготовки:</span><br/>
            <ul style={{listStyleType: 'none'}}>
                <li><em>Бухгалтерский учёт, анализ и аудит в отраслях экономики</em></li>
            </ul>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Основные направления научной деятельности:</span><br/>
            Преподаватели кафедры ведут научно-исследовательскую работу по теме "Совершенствование учета, аудита и экономического анализа на предприятиях Приднестровской Молдавской Республики".<br/>
            При кафедре действуют 5 научных студенческих кружков: <span style={{color: '#43a5ee', fontWeight: 'bold'}}>"Бухгалтерский учет", "Аудит", "Экономический анализ", "Статистика" и "Экономическая безопасность".</span>
            </p>
        </div>

        <div className="container-departments">
            <DepTable department={buchuchDepartment} /> {/* Передаем данные кафедры */}
        </div>
{/** 
    <div className="container-departments">
        <div className="department1-items">
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={stasiuk} alt="Стасюк Татьяна Петровна" />
                </div>
                <h3>Стасюк Татьяна<br/> Петровна</h3>
                <p>Зав. кафедрой, доцент</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Кротенко Юрий Иванович" />
                </div>
                <h3>Кротенко Юрий<br/> Иванович</h3>
                <p>Профессор</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Цуркан Анжела Александровна" />
                </div>
                <h3>Цуркан Анжела Александровна</h3>
                <p>Доцент</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Гребенюк Светлана Анатольевна" />
                </div>
                <h3>Гребенюк Светлана Анатольевна</h3>
                <p>Доцент</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={formus} alt="Формусатий Диана Викторовна" />
                </div>
                <h3>Формусатий Диана Викторовна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={mur} alt="Муравьева Наталья Юрьевна" />
                </div>
                <h3>Муравьева Наталья Юрьевна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Дмитриева Наталья Николаевна" />
                </div>
                <h3>Дмитриева Наталья Николаевна</h3>
                <p>Ст .преподаватель</p>
            </div>

            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Жигарева Елена Леонидовна" />
                </div>
                <h3>Жигарева Елена Леонидовна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Пасичник Наталья Владимировна" />
                </div>
                <h3>Пасичник Наталья Владимировна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Ляшкова Елена Анатольевна" />
                </div>
                <h3>Ляшкова Елена Анатольевна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Бурдюжа Наталья Владимировна" />
                </div>
                <h3>Бурдюжа Наталья Владимировна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={zelenin} alt="Зеленин Николай Валерьевич" />
                </div>
                <h3>Зеленин Николай Валерьевич</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Лясковская Елена Игоревна" />
                </div>
                <h3>Лясковская Елена Игоревна</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Подолян Андрей Ильич" />
                </div>
                <h3>Подолян Андрей<br/> Ильич</h3>
                <p>Ст .преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={poctar} alt="Почтарь Олег Валерьевич" />
                </div>
                <h3>Почтарь Олег<br/> Валерьевич</h3>
                <p>Ст .преподаватель</p>
            </div>

            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Продиус Сергей Петрович" />
                </div>
                <h3>Продиус Сергей<br/> Петрович</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Лупашко Надежда Александровна" />
                </div>
                <h3>Лупашко Надежда Александровна</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={trushin} alt="Трушин Владислав Михайлович" />
                </div>
                <h3>Трушин Владислав Михайлович</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Танасенко Андрей Сергеевич" />
                </div>
                <h3>Танасенко Андрей Сергеевич</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Глодя Дмитрий Борисович" />
                </div>
                <h3>Глодя Дмитрий<br/> Борисович</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Лясковская Анжелина Нольевна" />
                </div>
                <h3>Лясковская Анжелина Нольевна</h3>
                <p>Ст. преподаватель</p>
            </div>
            <div className="department1-item">
                <div className="container-department1-image">
                    <img src={bosuk} alt="Сапова Надежда Александровна" />
                </div>
                <h3>Сапова Надежда Александровна</h3>
                <p>Ст. преподаватель</p>
            </div>
        </div>
    </div>
*/}
        
    <Footer />
    </> );
}
 
export default Department2;