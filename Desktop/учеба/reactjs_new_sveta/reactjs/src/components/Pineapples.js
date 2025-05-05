import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users";

const Pineapples = () => {
    return ( <>
    <Header />
    <main>
        <div className="container-newscouncil">
            <Users type = "НАУКА" title = "Новости и анонсы"/>
        </div>
    </main> 
    <Footer />
    </>
    );
}
 
export default Pineapples;
