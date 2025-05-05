import React, {useState} from "react"; //импортируем из библиотеки react

//создадим с помощью функции
const Button = ({text, onClick, disabled}) => {
    return (
        <button className="button-more"  onClick = {onClick} disabled = {disabled}>{text}</button>
    );
};

Button.defaultProps = {
    text: "Ещё" //значение по умолчанию
}

export default Button;