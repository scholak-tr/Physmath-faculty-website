import React from "react";
import { Link } from "react-router-dom";

class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredIndex: null
        };
    }
    handleMouseEnter = (index) => {
        this.setState({hoveredIndex: index});
    };

    handleMouseLeave = () => {
        this.setState({hoveredIndex: null})
    }

    render() {
        const { className } = this.props;
        const { hoveredIndex } = this.state;
        const menuItems = [
         //   {name: "Новости", path: "/applicnews"},
            {name:"Правила приема", path: "/rules"},
           // {name:"План набора", path: "/recruitplan"},
            {name:"Сроки подачи документов", path: "/deadlines"},
            {name:"Вступительные испытания", path: "/entrance"},
            {name:"Направления обучения", path: "/areas"},
            {name:"Стоимость обучения", path: "/price"},
            {name:"Документы для поступления", path: "/documents"},
           // {name:"ЮЗШ", path: "/SWSH"},
           // {name:"Текущий конкурс", path: "/contest"}
        ];
        return(
            <nav className={`menu-applicants ${className}`}>
                <ul className="list-menu__applicants">
                {menuItems.map((item, index) => (
                        <li key={index} onMouseEnter = {() => this.handleMouseEnter(index)}
                        onMouseLeave={this.handleMouseLeave}
                        style={{color: hoveredIndex === index ? '#43a5ee': 'black'}}>
                            
                            <Link to={item.path} style={{textDecoration: 'none', color: 'inherit'}}>{item.name}</Link> 
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Applicants;