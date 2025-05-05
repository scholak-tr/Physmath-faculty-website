import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrareas from "./arrareas";
import styles from './Rules.module.css';

const CategoryCards = ({title}) => {
    const navigate = useNavigate();
  
return (<>
<h2 style={{textAlign:'center', marginBottom:'20px'}}>{title}</h2>
    <div className={styles["cards-container"]}>
      {Object.keys(arrareas).map((key) => {
        const category = arrareas[key];
        const programCount = category.directions.reduce((count, direction) => count + direction.direction.length, 0);
        
        return (
          <div key={key} className={styles["card"]}>
            <h4 style={{marginBottom:'16px'}}>{category.title}</h4>
            <p style={{fontSize:'0.7em', textAlign:'left', marginBottom:'20px'}}>{category.about}</p>
            {/**<p>{programCount} программ</p> */}
            <button
                onClick={() => navigate(`/category/${key}`)}
                className={styles["learn-more"]}>
                Узнать больше <span className={styles["arrow"]}>→</span>
            </button>
          </div>
        );
      })}
    </div>
</>);
};

export default CategoryCards;
