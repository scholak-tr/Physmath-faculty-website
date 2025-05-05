import React from "react";
import {Link} from "react-router-dom";

class Teachers extends React.Component {
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
            {name:"Учебно-методическая работа", path:"/umr"},
            {name:"Воспитательная работа", path:"/vr"},
            {name:"Конкурсы и аттестации", path:"/KiA"}
        ]
        return(
            <nav className={`menu-teachers ${className}`}>
                <ul className="list-menu__teachers">
                    {menuItems.map((item, index) => (
                        <li key={index} onMouseEnter = {() => this.handleMouseEnter(index)}
                        onMouseLeave={this.handleMouseLeave}
                        style={{color: hoveredIndex === index ? '#43a5ee': 'black'}}>
                            <Link to={item.path} style={{textDecoration:'none', color:'inherit'}}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Teachers;