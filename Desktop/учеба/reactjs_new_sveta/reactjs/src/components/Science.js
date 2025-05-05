import React from "react";
import {Link} from "react-router-dom";

class Science extends React.Component {
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
            {name:"Новости и анонсы", path:"/pineapples"},
            {name:"Темы научных исследований", path:""},
            {name:"Научно-исследовательская лаборатория", path:""},
            {name:"Студенческая наука", path:"/studentscien"},
            {name:"Магистратура", path:"/masterdegree"}, 
            {name:"Аспирантура", path:""} 
        ]
        return(
            <nav className={`menu-science ${className}`}>
                <ul className="list-menu__science">
                {menuItems.map((item, index) => (
                        <li key={index} 
                        onMouseEnter = {() => this.handleMouseEnter(index)}
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

export default Science;