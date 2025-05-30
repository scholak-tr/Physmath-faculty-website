import React from "react";
import styles from "./Rules.module.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Areas12 = () => {
    return ( <><Header/>
        <main>
            <h3 className={styles["h3-main"]}>Кафедра экономики и менеджмента</h3>
            <h3 className={styles["h3-main"]}>МАГИСТРАТУРА</h3><br/>
            <p>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Направление подготовки: </span>38.04.02 «Менеджмент»<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Профиль подготовки:</span> Экономика и управление на предприятии (в организации)<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Форма и сроки обучения: </span>заочная, 2 года и 6 месяцев<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Профильные предметы (вступительные испытания): </span>собеседование по профильному предмету<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Описание специальности: </span><br/>Направление формирует навыки в решении следующих профессиональных задач:
            <ul>
                <li>организационно-управленческая деятельность (разработка стратегий развития организаций и их отдельных подразделений); руководство подразделениями предприятий и организаций разных форм собственности, органов государственной и муниципальной власти; организация творческих коллективов (команд) для решения организационно-управленческих задач и руководство ими;</li>
                <li>аналитическая деятельность: поиск, анализ и оценка информации для подготовки и принятия управленческих решений; анализ существующих форм организации и процессов управления, разработка и обоснование предложений по их совершенствованию; проведение оценки эффективности проектов с учетом фактора неопределенности;</li>
                <li>научно-исследовательская деятельность (организация проведения научных исследований: определение заданий для групп и отдельных исполнителей, выбор инструментария исследований, анализ их результатов, сбор, обработка, анализ и систематизация информации по теме исследования, подготовка обзоров и отчетов по теме исследования; разработка моделей исследуемых процессов, явлений и объектов, относящихся к сфере профессиональной деятельности, оценка и интерпретация полученных результатов; выявление и формулирование актуальных научных проблем; подготовка обзоров, отчетов и научных публикаций);</li>
            </ul>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Чему будут учить: </span>Магистрантов данного профиля будут учить организации процессов управления организациями различных организационно-правовых форм, государственного и муниципального управления и обретению навыков в расчетно-экономической, аналитической, научно-исследовательская, организационно-управленческой, учетной и расчетно-финансовой видах деятельности.<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Кем можно будет работать (профессии): </span>Выпускники данного профиля способны работать в качестве руководителей и специалистов в экономических, финансовых, маркетинговых, производственно-экономических и аналитических службах организаций различных отраслей, сфер и форм собственности, в финансовых, кредитных и страховых учреждениях, в органах государственной и муниципальной власти, в научно-исследовательских организациях и в учреждениях системы высшего и среднего профессионального образования, среднего общего образования.<br/>
           <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Возможные места работы (организации, предприятия): </span>Выпускникам данного профиля доверят управленческую и экономическую деятельность в любых коммерческих и бюджетных организациях, в государственных и муниципальных учреждениях.<br/>
            <span style={{color: '#43a5ee', fontWeight: 'bold'}}>Количество бюджетных мест – 4.</span>
            </p>
        </main>
        <Footer/></> );
}
 
export default Areas12;