import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Studentgovern = () => {
    return ( 
        <>
            <Header />
            <main>
                <div className='studentProjects'>
                    <div className="container-newscouncil__progect">
                        <Link to="/volunteer" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Волонтёрское движение</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container-newscouncil__progect">
                        <Link to="/media-committee" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Медиа комитет</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container-newscouncil__progect">
                        <Link to="/creative-committee" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Творческий комитет</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container-newscouncil__progect">
                        <Link to="/editorial-board" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Редколлегия</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container-newscouncil__progect">
                        <Link to="/sports-committee" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Спортивный комитет</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container-newscouncil__progect">
                        <Link to="/science-committee" className="studentProgectsLink">
                            <div className="card__progect">
                                <h2>Научный комитет</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Studentgovern;
