import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./../pages/applicants/Rules.module.css";
import ScheduleComponent from "./Shedule2arr";

const Schedule2 = () => {
    return ( <>
    <Header />
    <main>
        <h2 className={styles["h2-main"]}>Расписание зачетов и экзаменов на 2024-2025 учебный год</h2>

        <ScheduleComponent />
        {/**
        <table className="contacts">
            <thead>
                <tr className="row3 td">
                    <td className="cell-1">Курс</td>
                    <td className="cell-2">Уровень образования</td>
                    <td>Структурное подразделение</td>
                    <td>Форма обучения</td>
                    <td>Зачёт/Экзамен</td>
                </tr>
            </thead>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
         */}
    </main>
    <Footer />
    </> );
}
 
export default Schedule2;