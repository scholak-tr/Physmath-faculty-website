import React from "react";
import {Link} from "react-router-dom";

class Students extends React.Component {
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
           // {name:"Студенческая жизнь", path:"/studentlife"},
          //  {name:"Студенческое управление", path:"/studentgovern"},
         //   {name:"Старостат", path:"/studentelder"},
            {name:"Студенческие проекты", path:"/studentproject"},
            {name:"Профком", path:"/tradeunion"},
            {name:"Расписание", path:"/schedule"}
        ]
        return(
            <nav className={`menu-students ${className}`}>
                <ul className="list-menu__students">
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


export default Students;