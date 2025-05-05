import React from "react";
import { useParams } from "react-router-dom";
import News from "./News";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

const NewsDetail = ({}) => {
    const { id } = useParams();
    const newsData = News();
    const newsItem = newsData.find(news => news.id === parseInt(id));

    if(!newsItem) {
        return (<div>Новость не найдена</div>)
    }
    return ( <>
    <Header/>
    <main>
        <div className="news-detail">
            <h1 style={{fontSize:'32px', color:'black', lineHeight:'2', textAlign:'center', marginBottom:'0'}}>{newsItem.h1}</h1>
            <p className="data" style={{fontSize:'12px', textAlign:'center', marginBottom:'20px'}}>{newsItem.data} {newsItem.type}</p>
            <div className="image">
                {newsItem.images.length > 1 ? (
                    <Carousel slides = {newsItem.images.map(image => ({image}))}/>
                ) : (
                    <div className="img-flex">
                        <img src={newsItem.images[0]} alt={newsItem.h1} />
                    </div>  
                )}
            </div>
            <p style={{marginTop:'20px'}}>{newsItem.p}</p>
        
            <div dangerouslySetInnerHTML={{__html: newsItem.about}}></div>
        </div>
    </main>
    <Footer/>
    </> );
}
 
export default NewsDetail;