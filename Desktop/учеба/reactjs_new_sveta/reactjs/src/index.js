import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './App'; //расширение здесь не надо указывать
import "./css/main.css"

const root = ReactDOMClient.createRoot(document.getElementById("root")); //создаем переменную вставляемого объекта
root.render(<App />); //вставляем компонент

