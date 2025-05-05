import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";
import NewsSWSH from "./NewsSWSH";

const SWSH = () => {
    return ( <>
    <Header/>
        <main>
        <CarouselComponent/>
            <a href="http://spsu.ru/abitur/podgotovitelnye-shkoly/1845-yunosheskaya-zaochnaya-shkola-ekonomicheskogo-fakulteta"  style={{textDecoration:'none', color:'#ffa78d'}} target="_blank"><h2 style={{textAlign:'center', lineHeight:'1.5', color:'#43a5ee', marginTop:'20px'}}>Юношеская заочная школа экономического факультета</h2></a><br/>
            <p>
            С 2010 года функционирует Юношеская заочная школа <span style={{color:'#43a5ee'}}>экономического факультета</span> ПГУ им. Т.Г. Шевченко.
            Юношеская заочная школа предназначена для пополнения знаний учащихся 10 и 11 классов в области экономики. Учащиеся, посещающие школу из различных городов и населенных пунктов Приднестровья, по ее окончании получают сертификат.<br/>
            Юношеская заочная школа работает с ноября по май учебного года.<br/>
            Занятия проходят по субботам (два раза в месяц).<br/>
            Записаться в юношескую заочную школу можно на <span style={{color:'#43a5ee'}}>кафедре экономической теории и мировой экономики</span> в корпусе 11, кабинет 305, телефон: <span style={{color:'#43a5ee', fontWeight:'bold'}}>0 (533) 79483.</span>
            </p>
        </main>
        <NewsSWSH />
    <Footer/>
    </> );
}
 
export default SWSH;