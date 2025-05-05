import React from "react"
import { withNavigation } from "./../../components/withNavigation";
import News from "../../components/News";
//import Button from "./../../components/Button";
import Users from "../../components/Users";

class Newscouncil extends React.Component {
    constructor(props) {
        super(props);
        this.allCouncil = News().filter(news => news.type === "УЧЕНЫЙ СОВЕТ");
        this.state = {
            visibleCouncil: this.allCouncil.slice(0, 6)
        };
    }

    loadMoreCouncil = () => {
        this.setState({
            visibleCouncil: this.allCouncil
        });
    };

    handleClick = (link, id) => {
        this.props.navigate(`/news/${id}`);
    };

    render() {
        const allCouncilLoaded = this.state.visibleCouncil.length >= this.allCouncil.length;
            return (
                <main>
                    <div className="container-newscouncil">
                        <Users type = "УЧЕНЫЙ СОВЕТ" title = "Новости"/>
                    </div>
                {/**
                 * <div className="container-newscouncil">
                    <h1>Новости</h1>
                    <div className="news-council">
                        {this.state.visibleCouncil.map((el) => (<div className="news-list__council" key={el.id}
                        onClick={() => this.handleClick(el.link, el.id)}>
                        <div className="image-council">
                            <img src={el.images[0]} alt={el.h1} style={{width:'360px'}}/>
                        </div>
                        <h6>{el.h1}</h6>
                        <p className="about">{el.p}</p>
                        <p className="data">{el.data}</p>
                    </div>))}
                </div>
                <Button onClick={this.loadMoreCouncil} disabled={allCouncilLoaded} />
                </div>
                 */}
                
                </main>
            )
    }
}
export default withNavigation(Newscouncil);