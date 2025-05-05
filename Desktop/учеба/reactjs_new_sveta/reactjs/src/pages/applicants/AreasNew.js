import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Rules.module.css";
import arrareas from "./arrareas";
import "./../../css/main.css";

const AreasNew = () => {
  const { category } = useParams(); // Получаем параметр категории из URL
  const [selectedCategory, setSelectedCategory] = useState(category || 'bachelor');
  const [searchText, setSearchText] = useState('');
  const [filteredDirections, setFilteredDirections] = useState(arrareas[selectedCategory].directions || []);

  useEffect(() => {
    setFilteredDirections(arrareas[selectedCategory].directions || []);
  }, [selectedCategory]);

  const handleSearch = () => {
    const newFilteredDirections = arrareas[selectedCategory].directions.filter(department =>
      department.direction.some(dir =>
        dir.directionName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredDirections(newFilteredDirections);
  };

  return (
    <>
    <div>
      <nav className={styles["nav"]}>
        {Object.keys(arrareas).map((key) => (
          <button
            className={key === "retraining" ? styles["small-font"] : ""}
            style={{  
              border: 'none', 
              padding: '8px',
              backgroundColor: selectedCategory === key ? '#43a5ee' : '#f4f4f5',
              color: selectedCategory === key ? '#FFF' : '#000',
              fontWeight: 'bold',
              borderRadius: selectedCategory === key ? '2px' : '0px'
            }}
            key={key}
            onClick={() => {
              setSelectedCategory(key);
              setSearchText('');
              setFilteredDirections(arrareas[key].directions || []);
            }}
          >
            {arrareas[key].title}
          </button>
        ))}
      </nav>
    </div>

    <div className={styles["search-container"]}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Введите направление"
        className={styles["search-input"]}
      />
      <button onClick={handleSearch} className={styles["search-button"]}>
        Искать
      </button>
    </div>

    <div className={styles["departments-areas"]}>
      {filteredDirections.length > 0 ? (
        filteredDirections.flatMap(department =>
          department.direction.flatMap((dir, idx) =>
            dir.areas.map((area, id) => (
              <div
                key={id}
                className={styles["area-card"]}
                style={{
                  backgroundImage: `url(${area.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                }}
              >
                <div className={styles["card-content"]}>
                  <h3>{area.areasTitle}</h3>
                  <p>Направление: {dir.directionName}</p>
                  <p>Код: <span>{dir.code}</span></p>
                  <p><span style={{ fontWeight: 'bold' }}>Форма обучения: </span>{area.form}</p>
                  <p><span style={{ fontWeight: 'bold' }}>Срок обучения: </span>{area.term}</p>
                  <p><span style={{ fontWeight: 'bold' }}>Кафедра: </span>{department.departmentTitle}</p>
                  {area.link && <a href={area.link} style={{ color: '#fff', textDecoration: 'underline' }}>Подробнее</a>}
                </div>
              </div>
            ))
          )
        )
      ) : (
        <p>Нет данных для отображения</p>
      )}
    </div>
    </>
  );
};

export default AreasNew;
