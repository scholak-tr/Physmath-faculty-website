import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./../pages/applicants/Rules.module.css";
import ScheduleComponent from "./Shedule3arr";

const Schedule3 = () => {
    return ( <>
    <Header />
    <main>
        <h2 className={styles["h2-main"]}>График проведения курсовых, контрольных и модульных работ на 2024-2025 учебный год</h2>
        <ScheduleComponent />
        
    </main>
    <Footer />
    </> );
}
 
export default Schedule3;