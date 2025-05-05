import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Users from "../../components/Users";

const Studentlife = () => {
    return (
        <>
        <Header/>
        <main>
        <div className="container-newscouncil">
            <Users type = "СТУДЕНТАМ" title = "Новости"/>
        </div>
        </main>
        <Footer/>
        </>
    )
}

export default Studentlife;