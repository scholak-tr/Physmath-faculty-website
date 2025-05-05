import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Rules.module.css";

const Specialty = () => {
    return ( <>
    <Header/>
    <div className="container-departments">
        <table className="contacts bachelor">
            <thead style={{borderColor:'white'}}>
                <tr className="row3">
                    <td colSpan={8} className="cell-1 td alicenter undertd">Специалитет</td>
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
                    <td rowSpan={4}>Экономическая безопасность</td>
                    <td rowSpan={2}>Экономико-правовое обеспечение экономической безопасности</td>
                    <td>Очно</td>
                    <td>5</td>
                    <td>5</td>
                    <td>10</td>
                    <td>3</td>
                    <td>7</td> 
                </tr>
                <tr>
                    
                    
                    <td>Зачно</td>
                    <td>5 лет 6 месяцев</td>
                    <td>1</td>
                    <td>30</td>
                    <td>1</td>
                    <td>7</td> 
                </tr>
                <tr>
                    
                    <td rowSpan={2}>Финансово экономическая безопасность</td>
                    <td>Очно</td>
                    <td>5</td>
                    <td>5</td>
                    <td>10</td>
                    <td>7</td>
                    <td>11</td> 
                </tr>
                <tr>
                    
                    
                    <td>Зачно</td>
                    <td>5 лет 6 месяцев</td>
                    <td>-</td>
                    <td>20</td>
                    <td>-</td>
                    <td>21</td> 
                </tr>
        </table>
        <h2 className={styles["h2-main"]}>По состоянию на 19 июля 2024 года</h2>
    </div>
    <Footer/>
    </> );
}
 
export default Specialty;