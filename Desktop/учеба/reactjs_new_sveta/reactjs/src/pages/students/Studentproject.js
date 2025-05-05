import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UsersNew from "./UsersNew";
import SmiModal from "./SmiModal";

const customStyles = {
    content: {
        width: '90%',
        height: '90%',
        margin: 'auto',
        padding: '20px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto',
    },
};

const Studentproject = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentType, setCurrentType] = useState('')
    const [showSmiModal, setShowSmiModal] = useState(false);

    const openModal = (type) => {
        setCurrentType(type);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentType('');
        setShowSmiModal(false);
    };

    const openSmiModal = (type) => {
        setCurrentType(type);
        setShowSmiModal(true);
    };

    return (
        <>
            <Header/>
            <main>
                <div className='studentProjects'>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('МИССЭКОНОМ')}>
                            <h2>Мисс эконом</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('ПРОФРАЗВИТИЕ')}>
                            <h2>Твое профессиональное развитие</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('ВОЛОНТЕР')}>
                            <h2>Добро вокруг нас</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('СПОРТ')}>
                            <h2>Спорт</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('ТВОРЧЕСТВО')}>
                            <h2>Творческая жизнь</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('БУДЬ В ТЕМЕ!')}>
                            <h2>Будь в теме!</h2>
                        </div>
                    </div>
                    <div className="container-newscouncil__progect">
                        <div className="card__progect" onClick={() => openModal('ПОМНЮ')}>
                            <h2>Я помню, я горжусь!</h2>
                        </div>
                    </div>
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="News Modal">
                    <button onClick={closeModal} style={
                        {
                            padding:'5px',
                            backgroundColor:'#43a5ee',
                            borderRadius:'5px'
                        }
                    }>Закрыть</button>

                        <UsersNew type={currentType}  />
                        <SmiModal type={currentType} />
                
                </Modal>

                {/*
                {showSmiModal && (
                    <Modal isOpen={showSmiModal} onRequestClose={closeModal} style={customStyles} contentLabel="News SMI Modal">
                        <button onClick={closeModal} style={{
                            padding: '5px',
                            backgroundColor: '#43a5ee',
                            borderRadius: '5px'
                        }}>Закрыть</button>
                        <main>
                            <SmiModal type={currentType} /> {/* Добавляем компонент SmiModal 
                        </main>
                    </Modal>
                )}*/}
            </main>
            <Footer/>
        </>
    );
}

export default Studentproject;
