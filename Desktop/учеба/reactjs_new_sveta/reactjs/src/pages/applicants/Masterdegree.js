import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Rules.module.css";

const Masterdegree = () => {
    return ( <>
    <Header/>
    <div className="container-departments">
        <table className="contacts bachelor">
            <thead style={{borderColor:'white'}}>
                <tr className="row3">
                    <td colSpan={8} className="cell-1 td alicenter undertd">Магистратура</td>
                </tr>
                <tr className="row3 alicenter td">
                    <td rowSpan={2} className="cell-3">Направление</td>
                    <td rowSpan={2} className="cell-2">Профиль</td>
                    <td colSpan={2}>Формы и сроки обучения</td>
                    <td colSpan={2}>Количество мест по плану</td>
                    <td colSpan={2}>Количество мест по факту</td>
                </tr>
                <tr className="row3 alicenter td">
                    <td>Форма</td>
                    <td>Срок, лет</td>
                    <td>Бюджет</td>
                    <td>Договор</td>
                    <td>Бюджет</td>
                    <td>Договор</td>
                </tr>
            </thead>
                <tr>
                    <td rowSpan={4}>Экономика</td>
                    <td>Бухгалтерский учет, анализ и аудит</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>8</td>
                    <td>6</td>
                    <td>4</td>
                    <td>0</td> 
                </tr>
                <tr>
                    <td>Международная экономика</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>7</td>
                    <td>10</td>
                    <td>7</td>
                    <td>1</td> 
                </tr>
                <tr>
                    <td>Международные финансы и банки</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>6</td>
                    <td>9</td>
                    <td>6</td>
                    <td>5</td> 
                </tr>
                <tr>
                    <td>Аудит и финансовый консалтинг</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>3</td>
                    <td>12</td>
                    <td>3</td>
                    <td>7</td> 
                </tr>
                <tr>
                    <td rowSpan={3}>Менеджмент</td>
                    <td>Экономика и управление на предприятиии /в организации/</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>4</td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td> 
                </tr>
                <tr>
                    <td rowSpan={2}>Управление и разработка информационными системами в экономике</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>2</td>
                    <td>-</td>
                    <td>0</td>
                    <td>-</td> 
                </tr>
                <tr>
                    <td>Очно-заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>7</td>
                    <td>15</td>
                    <td>8</td>
                    <td>2</td> 
                </tr>
                <tr>
                    <td>Финансы и кредит</td>
                    <td>Финансовая экономика и монетарное регулирование</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>7</td>
                    <td>10</td>
                    <td>8</td>
                    <td>2</td> 
                </tr>
                <tr className="row3">
                    <td colSpan={8} className="cell-1 td alicenter undertd">Программы переподготовки (на базе высшего образования)</td>
                </tr>
                <tr>
                    <td colSpan={2}>Управление и экономика в здравоохранении</td>
                    <td>Заочно</td>
                    <td>2 года</td>
                    <td>15</td>
                    <td>-</td>
                    <td>0</td>
                    <td>-</td> 
                </tr>
                <tr>
                    <td colSpan={2}>Бухгалтерский учет, анализ и аудит</td>
                    <td>Заочно</td>
                    <td>2 года 6 месяцев</td>
                    <td>8</td>
                    <td>7</td>
                    <td>0</td>
                    <td>0</td> 
                </tr>
        </table>
        <h2 className={styles["h2-main"]}>По состоянию на 19 июля 2024 года</h2>
    </div>
    <Footer/>
    </> );
}
 
export default Masterdegree;