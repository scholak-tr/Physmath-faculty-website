import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Entrance = () => {
    return (
        <>
            <Header />
            <main>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '10px', color:'black' }}>Прием на обучение в Университет по образовательным программам Физико-математического факультета</h1>
                    <p>Прием на первый курс осуществляется на конкурсной основе:</p>
                    <ul style={{ textAlign: 'left' }}>
                        <li><strong>По программам бакалавриата</strong> – по результатам вступительных испытаний, проводимых Университетом:
                            <ul>
                                <li>Математика (профильная дисциплина)</li>
                                <li>Физика</li>
                                <li>Информатика</li>
                            </ul>
                        </li>
                        <li><strong>По программам магистратуры</strong> – по результатам вступительных испытаний, проводимых Университетом, по выбранной специальности.</li>
                        <li><strong>По программам профессиональной переподготовки</strong> – по результатам вступительных испытаний, проводимых Университетом.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Entrance;