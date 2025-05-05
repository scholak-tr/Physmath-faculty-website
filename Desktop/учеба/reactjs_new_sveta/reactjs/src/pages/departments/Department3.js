import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./../../css/main.css";
import safronov from "./../../img/safronov.png";
import DepTable from "./DepTable";
import Dep from "./Dep"; // Импортируем данные

const Department3 = () => {
    const allDepartments = Dep();
    const financeDepartment = allDepartments.find(department => department.departmentTitle === "Кафедра финансов и кредита");

    return (
        <>
            <Header />
            <div className="container-departments">
                <h1>Кафедра финансов и кредита</h1>
                <div className="department1">
                    <p>
                        <ul>
                            <li>3300, г. Тирасполь, бульвар Гагарина 2, каб. №214,215</li>
                            <li>533-79480</li>
                            <li>kafedrafikpgu@mail.ru</li>
                        </ul>
                        Кафедра образована <span style={{color: '#43a5ee', fontWeight: 'bold'}}>01 марта 1997 года</span> по решению Ученого Совета ПГУ и приказу ректора. Первый заведующий кафедрой <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Сафронов Юрий Михайлович</span> к.э.н., доцент.<br/><br/>
                        <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Специальности подготовки дипломированных специалистов:<br/>
                        направления подготовки бакалавров:</span>
                        <ul>
                            <li>Направление: <em>Экономика (38.03.01)</em></li>
                        </ul>
                        <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Профили:</span>
                        <ul>
                            <li><em>Финансы и кредит</em></li>
                            <li><em>Налоги и налоговый консалтинг</em></li>
                        </ul><br/>
                    </p>
                    <figure>
                        <img src={safronov} className="righting" width="400px"/>
                        <figcaption style={{lineHeight: '2'}}><span style={{color: '#43a5ee', fontWeight: 'bold'}}>Сафронов Юрий Михайлович</span>, кандидат экономических наук, доцент, заведующий кафедрой</figcaption>
                    </figure>
                </div>
                <br/>         
                <p>
                    <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направления подготовки специалитета:</span>
                    <ul>
                        <li>Направление: <em>Экономическая безопасность (38.05.01)</em></li>
                        <li>Профиль: <em>Финансово-экономическая безопасность</em></li>
                    </ul><br/>
                    <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направления подготовки магистрантов:</span><br/>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Направление: <em>Финансы и кредит (38.04.08)</em></li>
                        <li>Магистерская программа: <em>Финансовая экономика и монетарное регулирование</em></li>
                    </ul><br/>
                    <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Основные направления научной деятельности:</span><br/>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Финансовый сектор экономики,</li>
                        <li>Финансовые процессы государства, экономических агентов,</li>
                        <li>Денежно-кредитное регулирование государства.</li>
                    </ul>
                </p>
            </div>

            <div className="container-departments">
                <DepTable department={financeDepartment} /> {/* Передаем данные кафедры */}
            </div>
            <Footer />
        </>
    );
}

export default Department3;
