import React from "react";
import {  Link } from "react-router-dom";

class Faculty extends React.Component {
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
            { name: "История создания", path: "/history" },
            { name: "Ученый совет", path: "/council" },
            { name: "Руководство", path: "/management" },
            { name: "Кафедры", path: "/departments" },
          //  { name: "УВЦ", path: "/uvc" },
            { name: "Контакты", path: "/contacts" }
        ];
        return (  
            <>
                <nav className={`menu-faculty ${className}`}>
                    <ul className="list-menu__faculty">
                    {menuItems.map((item, index) => (
                            <li key={index} 
                            onMouseEnter = {() => this.handleMouseEnter(index)}
                            onMouseLeave={this.handleMouseLeave}
                            style={{color: hoveredIndex === index ? '#43a5ee': 'black'}}>

                                <Link to={item.path} style={{textDecoration: 'none', color: 'inherit'}}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Faculty;