import React from "react";
import { withNavigation } from "./../../components/withNavigation";
import News from "./../../components/News";
import { BrowserView, MobileView } from "react-device-detect"; // Утилиты для отображения на разных устройствах

class UsersNew extends React.Component {
    constructor(props) {
        super(props);
        const { type } = props;
        this.allNew = News().filter(news => news.type.includes(type));
    }

    handleClick = (link, id) => {
        this.props.navigate(`/news/${id}`); // Навигация к странице новости по ID
    };

    render() {
        const { title } = this.props;

        return (
            <main>
                <BrowserView> {/* Отображение для десктопа*/}
                    <div className="news">
                        {this.allNew.map((el) => (
                            <div
                                className="news-list"
                                key={el.id}
                                onClick={() => this.handleClick(el.link, el.id)}
                            >
                                <div className="image">
                                    <img src={el.images[0]} alt={el.h1} style={{ width: "360px" }} />
                                </div>
                                <h6>{el.h1}</h6>
                                <p className="about">{el.p}</p>
                                <p className="data">{el.data}</p>
                            </div>
                        ))}
                    </div>
                </BrowserView>
                <MobileView> {/* Отображение для мобильных устройств*/}
                    <div className="news">
                        {this.allNew.map((el) => (
                            <div
                                className="news-list"
                                key={el.id}
                                onClick={() => this.handleClick(el.link, el.id)}
                            >
                                <div className="image">
                                    <img src={el.images[0]} alt={el.h1} style={{ width: "100%" }} />
                                </div>
                                <h6>{el.h1}</h6>
                                <p className="about">{el.p}</p>
                                <p className="data">{el.data}</p>
                            </div>
                        ))}
                    </div>
                </MobileView>
            </main>
        );
    }
}

export default withNavigation(UsersNew);
