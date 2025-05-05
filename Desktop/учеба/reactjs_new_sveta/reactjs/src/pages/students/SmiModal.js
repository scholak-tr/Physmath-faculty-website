import React from "react";
import { withNavigation } from "./../../components/withNavigation";
import NewsSmi from "./../../components/NewsSmi";

class SmiModal extends React.Component {
    constructor(props) {
        super(props);
        const { type } = props;
        this.allSmi = NewsSmi().filter(news => news.type.includes(type));
    }

    handleClick = (id) => {
        const selectedSmi = this.allSmi.find(el => el.id === id);
        if (selectedSmi && selectedSmi.link) {
            this.props.navigate(`/newssmi/${id}`);
        } else {
            alert("Видео не найдено или ссылка отсутствует");
        }
    };

    render() {
        return (
            <main>
            <div className="news">
                {this.allSmi.map((el) => (
                    <div className="news-list" key={el.id} onClick={() => this.handleClick(el.id)}>
                        <div className="image">
                            {el.image && el.image.length > 0 && (
                                <img src={el.image[0]} alt={el.h1} style={{ width: '360px' }} />
                            )}
                        </div>
                        <h6>{el.h1}</h6>
                        <p className="about">{el.p}</p>
                        <p className="data">{el.data}</p>
                    </div>
                ))}
            </div>
            </main>
        );
    }
}

export default withNavigation(SmiModal);
