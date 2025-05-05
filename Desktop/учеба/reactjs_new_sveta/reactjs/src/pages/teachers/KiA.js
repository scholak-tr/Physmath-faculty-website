import React, {useState} from 'react';
import Modal from "react-modal";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Users from "../../components/Users";

const customStyles = {
    content: {
        width: '50%',
        height: '50%',
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
const KiA = () => {
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [currentLinks, setCurrentLinks] = useState([]); //хранение ссылок

        const links = {
            "КОНКУРСЫ": [
                {name: 'Положение о порядке замещения должностей ППС', url: 'https://drive.google.com/file/d/1JOFcSp-4As8CPtmJqVrkNnGJvX_HgjQD/view?usp=sharing'},
                {name: 'Бюллетень голосования - образец', url: 'https://docs.google.com/document/d/1h83KVtV-PXeb8A1QvXYRvqp9q9zLrpVn/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Заявление для участия в конкурсе', url: 'https://docs.google.com/document/d/1voC53dr_QsiD5MpUh3G5nLYgIlaT41La/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Образец отчета о проделанной работе', url: 'https://docs.google.com/document/d/1bhVt5o4lrCBPAVTjctbLIPGB4I8Hrklh/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Перечень документов для конкурса', url: 'https://docs.google.com/document/d/1XohFGmympYclq2lyqnvv4Sa3n-Oywpsa/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Представление зав. кафедрой', url: 'https://docs.google.com/document/d/1QPMdpQ14NxuxDB1xRHol6v74R1RsZsZo/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Содержание конкурсного дела', url: 'https://docs.google.com/document/d/1SykUG6GUEVNEtKcV8tSHYjuvqSS57kk4/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Список опубликованных учебных изданий и научных трудов соискателя - образец', url: 'https://docs.google.com/document/d/17RT72A-Okwwwyxig-2e_wz4uXvUOVZ4e/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'},
                {name: 'Титульный лист конкурсного дела', url: 'https://docs.google.com/document/d/1dgALu_4wJ8nXUax1EiwI3ypOqDbAZ7NT/edit?usp=sharing&ouid=107557606318852419705&rtpof=true&sd=true'}
            ],
            "АТТЕСТАЦИЯ": [
                {name: '', url: ''},
                {name: '', url: ''}
            ],
        }
    
        const openModal = (type) => {
            setCurrentLinks(links[type]); //
            setModalIsOpen(true);
        };
    
        const closeModal = () => {
            setModalIsOpen(false);
        };
    
    return (
        <>
        <Header/>
        <main>
            
            <div className="competition">
                <div className="container-newscouncil__progect">
                    <div className="card__progect" onClick={() => openModal('')}>
                        <h2></h2>
                    </div>
                </div>
                <div className="container-newscouncil__progect">
                    <div className="card__progect" onClick={() => openModal('')}>
                        <h2></h2>
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
            
                        <ul style={{padding:'20px', lineHeight:'40px'}}>
                            {currentLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target='_blank' rel='noopener noreferrer' style={{textDecoration:'none', color:'rgb(3, 12, 18)'}}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                            
                </Modal>

        <div className="container-newscouncil">
            <Users type = "КОНКУРСЫ" title = "Новости"/>
        </div>

        </main>
        <Footer/>
        </>
    )
}

export default KiA;