import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./../pages/applicants/Rules.module.css";
import ScheduleComponent from "./Shedule1arr";

const Schedule1 = () => {
    return ( <>
    <Header />
    <main>
        <h2 className={styles["h2-main"]}>Расписание занятий на 2024-2025 учебный год</h2>
        
        <ScheduleComponent />
        
        {/** 
        <table className="contacts">
            <thead>
                <tr className="row3 ">
                    <td className="cell-1 td">Курс</td>
                    <td className="cell-2 td">Уровень образования</td>
                    <td className="td">Структурное подразделение</td>
                    <td className="td">Форма обучения</td>
                    <td className="td">Полугодие</td>
                </tr>
            </thead>
            
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260982/1%20курс%20бакалавры%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260982/1%20курс%20бакалавры%20очное%20-%20временное.pdf">1-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260991/1%20курс%20специалитет%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260991/1%20курс%20специалитет%20очное%20-%20временное.pdf">1-курс специалитет и бакалавриат</a></td>
                <td>Специалитет</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261000/2%20курс%20бакалавры%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261000/2%20курс%20бакалавры%20очное%20-%20временное.pdf">2-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260946/2%20курс%20бакалавры%20очно-заочное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260946/2%20курс%20бакалавры%20очно-заочное.pdf">2-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очно-заочная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261009/1%20курс%20специалитет%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261009/1%20курс%20специалитет%20очное%20-%20временное.pdf">2-курс специалитет и бакалавриат</a></td>
                <td>Специалитет</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260937/2%20курс%20магистры%20очно-заочное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260937/2%20курс%20магистры%20очно-заочное.pdf">2-курс</a></td>
                <td>Магистратура</td>
                <td>Экономический факультет</td>
                <td>Очно-заочная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260955/3%20курс%20бакалавры%20очно-заочное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260955/3%20курс%20бакалавры%20очно-заочное.pdf">3-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очно-заочная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261018/3%20курс%20бакалавриат,специалитет%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261018/3%20курс%20бакалавриат,специалитет%20очное%20-%20временное.pdf">3-курс специалитет и бакалавриат</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261027/4%20курс%20бакалавриат%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261027/4%20курс%20бакалавриат%20очное%20-%20временное.pdf">4-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260964/4%20курс%20бакалавры%20очно-заочное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260964/4%20курс%20бакалавры%20очно-заочное.pdf">4-курс</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очно-заочная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261036/4%20курс%20специалитет%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261036/4%20курс%20специалитет%20очное%20-%20временное.pdf">4-курс</a></td>
                <td>Специалитет</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261045/5%20курс%20специалитет%20очное%20-%20временное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1261045/5%20курс%20специалитет%20очное%20-%20временное.pdf">5-курс</a></td>
                <td>Специалитет</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260973/6%20курс%20специалитет%20заочное.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260973/6%20курс%20специалитет%20заочное.pdf">6-курс</a></td>
                <td>Специалитет</td>
                <td>Экономический факультет</td>
                <td>Заочная</td>
                <td>1</td>
            </tr>
            <tr>
                <td><a href="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260332/График%20погашения%20академических%20задолженностей%20сентябрь%202024.pdf" download="http://moodle.spsu.ru/pluginfile.php/40489/mod_data/content/1260332/График%20погашения%20академических%20задолженностей%20сентябрь%202024.pdf">График погашения задолженностей для всех курсов</a></td>
                <td>Бакалавриат</td>
                <td>Экономический факультет</td>
                <td>Очная</td>
                <td>1</td>
            </tr>
        </table>
        */}


        
    </main>
    <Footer />
    </> );
}
 
export default Schedule1;