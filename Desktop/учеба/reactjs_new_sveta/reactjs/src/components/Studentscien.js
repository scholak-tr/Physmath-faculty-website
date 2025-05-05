import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users";

const Studentscien = () => {
    return ( <>
    <Header />
    <main>
        <div className="container-newscouncil">
            <Users type = "СТУДЕНЧЕСКАЯ НАУКА" title = "Студенческая наука"/>
        </div>
    </main> 
    <Footer />
    </>
    );
}
 
export default Studentscien;

