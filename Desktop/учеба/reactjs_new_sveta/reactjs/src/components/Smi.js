import React from "react";
import { withNavigation } from "./withNavigation";
import NewsSmi from "./NewsSmi";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

class Smi extends React.Component {
    constructor(props) {
        super(props);
        this.allSmi = NewsSmi();
        this.state = {
            visibleSmi: this.allSmi.slice(0, 6)
        };
    }

    loadMoreSmi = () => {
        this.setState({
            visibleSmi: this.allSmi
        });
    };

    handleClick = (id) => {
        const selectedSmi = this.allSmi.find(el => el.id === id);
        if (selectedSmi && selectedSmi.link) {
            this.props.navigate(`/newssmi/${id}`);
        } else {
            alert("Видео не найдено или ссылка отсутствует");
        }
    };

    render() {
        const allSmiLoaded = this.state.visibleSmi.length >= this.allSmi.length;
        return (
            <div className="name">
                <Header />
                <main>
                    <h1>Новости</h1>
                    <div className="news">
                        {this.state.visibleSmi.map((el) => (
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
                    <Button onClick={this.loadMoreSmi} disabled={allSmiLoaded} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default withNavigation(Smi);
