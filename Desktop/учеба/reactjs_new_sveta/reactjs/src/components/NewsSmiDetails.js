import React from "react";
import { useParams } from "react-router-dom";
import NewsSmi from "./NewsSmi";
import Header from "./Header";
import Footer from "./Footer";
import VideoPage from "./VideoPage";

const NewsSmiDetail = () => {
    const { id } = useParams();
    const newsSmiData = NewsSmi();
    const newsSmiItem = newsSmiData.find(newssmi => newssmi.id === parseInt(id));

    if(!newsSmiItem) {
        return (<div>Новость не найдена</div>)
    }
    return ( <>
    <Header/>
    <main>
        <div className="news-detail">
            <h1 style={{fontSize:'32px', color:'black', lineHeight:'2', textAlign:'center', marginBottom:'0'}}>{newsSmiItem.h1}</h1>
            <p className="data" style={{fontSize:'12px', textAlign:'center', marginBottom:'20px'}}>{newsSmiItem.data}</p>
            <div className="image">
                    <div className="img-flex">
                        <VideoPage />
                    </div>  
            </div>
            <p style={{marginTop:'20px'}}>{newsSmiItem.p}</p>
            <pre style={{whiteSpace:'pre-wrap', fontSize:'20px', margin:'10px 0', lineHeight:'1.5'}}>{newsSmiItem.about}</pre>
        </div>
    </main>
    <Footer/>
    </> );
}
 
export default NewsSmiDetail;