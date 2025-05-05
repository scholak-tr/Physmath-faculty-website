import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Rules.module.css";

const Bachelor = () => {
    return ( <>
    <Header/>
    <div className="container-departments">
        <table className="contacts bachelor">
            <thead style={{borderColor:'white'}}>
                <tr className="row3">
                    <td colSpan={8} className="cell-1 td alicenter undertd">Бакалавриат</td>
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
                    <td rowSpan={6}>Экономика</td>
                    <td>Бухгалтерский учет, анализ и аудит</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>16</td>
                    <td>10</td>
                    <td>15</td>
                    <td>2</td> 
                </tr>
                <tr>
                    
                    <td>Внешнеэкономические связи и таможенный консалтинг</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>5</td>
                    <td>15</td>
                    <td>4</td>
                    <td>4</td> 
                </tr>
                <tr>
                    
                    <td>Налоги и налоговый консалтинг</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>9</td>
                    <td>6</td>
                    <td>6</td>
                    <td>0</td> 
                </tr>
                <tr>
                    
                    <td>Финансы и кредит</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>6</td> 
                </tr>
                <tr>
                    
                    <td>Экономика и менеджмент</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>2</td>
                    <td>14</td>
                    <td>6</td>
                    <td>5</td> 
                </tr>
                <tr>
                    
                    <td>Экономика социально-трудовых отношений</td>
                    <td>Очно-заочно</td>
                    <td>5</td>
                    <td>-</td>
                    <td>15</td>
                    <td>-</td>
                    <td>0</td> 
                </tr>
                <tr>
                    <td>Менеджмент</td>
                    <td>Управление персоналом</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>2</td>
                    <td>13</td>
                    <td>5</td>
                    <td>2</td> 
                </tr>
                <tr>
                    <td>Бизнес-информатика</td>
                    <td>Применение и разработка информационных систем в экономике</td>
                    <td>Очно</td>
                    <td>4</td>
                    <td>3</td>
                    <td>12</td>
                    <td>5</td>
                    <td>10</td> 
                </tr>
        </table>
        <h2 className={styles["h2-main"]}>По состоянию на 19 июля 2024 года</h2>
    </div>
    <Footer/>
    </> );
}
 
export default Bachelor;