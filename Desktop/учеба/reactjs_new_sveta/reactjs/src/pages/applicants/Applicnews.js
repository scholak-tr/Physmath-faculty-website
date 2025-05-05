import React from "react";
import { withNavigation } from "../../components/withNavigation";
import "./../../css/main.css";
import applicant from "./../../img/applicant.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
/*import Button from "../../components/Button";*/
import Users from "../../components/Users";

class Applicnews extends React.Component {
    constructor(props) {
        super(props);
        this.allAplicnews = [
            {
                id: 1,
                imageSrc: applicant,
                h1: "Приднестровский государственный университет им. Т.Г. Шевченко проводит предварительное тестирование для желающих поступить в университет.",
                p: "",
                date: "08.04.2024",
                link: "/applicnews/1",
                span1: "с 25 по 27 апреля 2024 года",
                span2: "предварительное",
                span3: "с 18 марта по 18 апреля 2024 года",
                dateT1: "25 апреля 9.00",
                dateT2: "27 апреля 9.00",
                dateR1: "25 апреля 11.00",
                dateR2: "27 апреля 11.00",
                dateB1: "25 апреля 9.00",
                dateB2: "25 апреля 9.00",
                dayT1: "четверг",
                dayT2: "суббота",
                dayR1: "четверг",
                dayR2: "суббота",
                dayB1: "четверг",
                dayB2: "суббота",
                examT1: "Математика, литература, география",
                examR1: "Математика, литература, география, обществознание, химия",
                examB1: "Математика, литература, география, обществознание, химия",
            }
        ];
        this.state = {
            visibleAplicnews: this.allAplicnews.slice(0, 6)
        };
    }
    loadMoreAplicnews = () => {
        this.setState({
            visibleAplicnews: this.allAplicnews
        });
    };

    handleClick = (news) => {
        this.props.navigate(news.link, {state: {news: {...news, image: undefined}}});
    };
    render() {
        /*const allAplicnewsLoaded = this.state.visibleAplicnews.length >= this.allAplicnews.length;*/
            return (<div className="name">
                <Header />
                <main>
                <h1>Новости поступления</h1>
                    <div className="container-newscouncil">
                        <Users type = "АБИТУРИЕНТ" title = "Абитуриенту"/>
                    </div>
                {/*<div className="news">
                {this.state.visibleAplicnews.map((el) => (<div className="news-list" key={el.id}
                onClick={() => this.handleClick(el)}>
                    <div className="image"><img src={el.imageSrc} style={{width: '360px'}}/></div>
                    <h6>{el.h1}</h6>
                    <p className="about">{el.p}</p>
                    <p className="data">{el.date}</p>
                </div>))}
            </div>
                <Button onClick={this.loadMoreAplicnews} disabled={allAplicnewsLoaded} />
                */}
                </main>
                <Footer />
            </div>)
    }
}
export default withNavigation(Applicnews);