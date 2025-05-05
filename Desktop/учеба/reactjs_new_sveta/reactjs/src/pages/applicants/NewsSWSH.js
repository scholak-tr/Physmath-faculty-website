import React from "react"
import { withNavigation } from "./../../components/withNavigation";
import News from "../../components/News";
import Button from "./../../components/Button";

class NewsSWSH extends React.Component {
    constructor(props) {
        super(props);
        this.allSWSH = News().filter(news => news.type === "ЮЗШ");
        this.state = {
            visibleSWSH: this.allSWSH.slice(0, 6)
        };
    }

    loadMoreSWSH = () => {
        this.setState({
            visibleSWSH: this.allSWSH
        });
    };

    handleClick = (link, id) => {
        this.props.navigate(`/news/${id}`);
    };

    render() {
        const allSWSHLoaded = this.state.visibleSWSH.length >= this.allSWSH.length;
            return (
                <>
                <div className="container-newscouncil">
                <h1>Новости</h1>
                <div className="news-council">
                {this.state.visibleSWSH.map((el) => (<div className="news-list__council" key={el.id}
                onClick={() => this.handleClick(el.link, el.id)}>
                    <div className="image-council">
                        <img src={el.images[0]} alt={el.h1} style={{width:'360px'}}/>
                    </div>
                    <h6>{el.h1}</h6>
                    <p className="about">{el.p}</p>
                    <p className="data">{el.data}</p>
                </div>))}
            </div>
            <Button onClick={this.loadMoreSWSH} disabled={allSWSHLoaded} />
            </div>
                </>
            )
    }
}

export default withNavigation(NewsSWSH);