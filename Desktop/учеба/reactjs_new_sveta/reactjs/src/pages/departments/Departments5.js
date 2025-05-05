import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./../../css/main.css";
import decan from "./../../img/decan6.png";
import DepTable from "./DepTable";
import Dep from "./Dep";

const Department5 = () => {
    const allDepartments = Dep(); 
    const econTheoryDepartment = allDepartments.find(department => department.departmentTitle === "Кафедра экономической теории и мировой экономики");
    return (
        <>
            <Header />
            <div className="container-departments">
                <h1>Кафедра экономической теории и мировой экономики</h1>
                <div className="department1">
                    <p>
                        <ul>
                            <li>3300, г. Тирасполь, бульвар Гагарина 2, каб. №</li>
                            <li>533-79483</li>
                            <li>kafedra-etime@mail.ru</li>
                        </ul>
                        В соответствии с Приказом Министерства Народного образования №238 от <span style={{color: '#43a5ee', fontWeight: 'bold'}}>8 августа 1963 г.</span>, была образована кафедра "Политическая экономия". Первым заведующим кафедрой стал <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Гуров Василий Тимофеевич (1920-1997 г.г.).</span><br/>
                        В 1995 году решением Ученого Совета ПГУ им. Т.Г. Шевченко кафедра переименована в <span style={{color: '#43a5ee', fontWeight: 'bold'}}>«Экономическая теория»</span>. С 2001 года кафедра входит в состав экономического факультета. В 2012 году кафедра переименована в кафедру <span style={{color: '#43a5ee', fontWeight: 'bold'}}>«Экономическая теория и мировая экономика»</span>.
                        <br/><br/>
                        <ul><span style={{color: '#43a5ee', fontWeight: 'bold'}}>Специальности подготовки дипломированных специалистов:<br/>
                        направления подготовки бакалавров:</span>
                            <li>Направление: <em>Экономика (38.03.01)</em></li>
                            <li>Профиль: <em>Внешнеэкономические связи и таможенный консалтинг</em></li>
                        </ul>
                    </p>               
                    <figure>
                        <img src={decan} className="righting" width="400px"/>
                        <figcaption style={{lineHeight: '2'}}><span style={{color: '#43a5ee', fontWeight: 'bold'}}>Узун Иван Николаевич,</span> доцент, кандидат экономических наук, и.о. заведующего кафедрой</figcaption>
                    </figure>
                </div>
                <br/>
                <p>
                    <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направления подготовки магистрантов:</span>
                    <ul>
                        <li>Направление: <em>Экономика (38.04.01)</em></li>
                        <li>Магистерская программа: <em>Международная экономика</em></li>
                    </ul><br/>
                    <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Основные направления научной деятельности:</span><br/>
                    <ul style={{listStyleType: 'none'}}>
                        <li>
                            Сотрудники кафедры осуществляют активный научный поиск в области совершенствования социально-экономических отношений в ПМР.
                        </li>
                    </ul>
                </p>
            </div>

            <div className="container-departments">
                <DepTable department={econTheoryDepartment} /> {/* Передаем данные кафедры */}
            </div>
            <Footer />
        </>
    );
}
export default Department5;
