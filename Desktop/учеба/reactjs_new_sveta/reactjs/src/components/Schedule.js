import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./../css/main.css";
import schedules from "./schedules";


const Schedule = () => {
    return ( 
        <div>
            <Header />
            <div className="container-departments container-schedule">
                <div className="departments-items">
                    {schedules.map((schedule) => (
                        <Link key={schedule.id} to={schedule.link}>
                            <div className="departments-item" >
                                <div className="departments-img-container">
                                    <img src={schedule.image} style={{height: '400px', width: '560px'}} alt={schedule.text} />
                                    <div className="departments-text">{schedule.text}</div>
                                    <button className="departments-button">Ещё</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>           
            </div>
            <Footer />
        </div>
     );
}
 
export default Schedule;