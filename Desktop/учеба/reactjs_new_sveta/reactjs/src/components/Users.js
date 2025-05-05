import React from "react";
import { withNavigation } from "./withNavigation"; // HOC для навигации
import News from "./News"; // Модуль для получения данных новостей
import Button from "./Button"; // Компонент кнопки
import { BrowserView, MobileView } from "react-device-detect"; // Утилиты для отображения на разных устройствах

class Users extends React.Component {
    constructor(props) {
        super(props);
        const { type } = props; // Получение типа новостей из пропсов
        this.allUsers = News().filter(news => news.type.includes(type)); // Фильтрация новостей по типу
        this.state = { 
            visibleUsers: this.allUsers.slice(0, 6) // Начальное состояние с первыми 6 новостями
        };
    }

    loadMoreUsers = () => {
        const { visibleUsers } = this.state; /*Из текущего состояния компонента (this.state) мы извлекаем массив видимых пользователей (visibleUsers)*/
        const currentLength = visibleUsers.length; /*Подсчитываем текущее количество видимых пользователей. Это значение хранится в переменной currentLength*/
        const isMoreToLoad = currentLength < this.allUsers.length; /*Проверяем, есть ли еще пользователи, которые не были загружены. Сравниваем текущее количество видимых пользователей с общим количеством пользователей (this.allUsers.length)*/

        if (isMoreToLoad) { /*Если переменная isMoreToLoad равна true, то есть еще пользователи для загрузки, продолжаем выполнение кода внутри if*/
            const nextUsers = this.allUsers.slice(currentLength, currentLength + 6); /*Используем метод slice для получения следующей порции пользователей. Берем пользователей начиная с индекса currentLength и до currentLength + 6*/
            this.setState({ /*Вызываем метод setState для обновления состояния компонента*/
                visibleUsers: visibleUsers.concat(nextUsers) // Обновление состояния с новыми новостями Обновляем массив видимых пользователей, добавляя к нему новых пользователей (nextUsers). Для этого используем метод concat, который объединяет два массива и возвращает новый массив
            });
        }
    };

    handleClick = (link, id) => {
        this.props.navigate(`/news/${id}`); // Навигация к странице новости по ID
    };

    render() {
        const { title } = this.props;
        const allUsersLoaded = this.state.visibleUsers.length >= this.allUsers.length;

        return (
            <div className="name">
                <h1>{title}</h1>
                <BrowserView> {/* Отображение для десктопа*/}
                    <div className="news">
                        {this.state.visibleUsers.map((el) => (
                            <div
                                className="news-list"
                                key={el.id}
                                onClick={() => this.handleClick(el.link, el.id)}
                            >
                                <div className="image">
                                    <img src={el.images[0]} alt={el.h1} style={{ width: "360px" }} />
                                </div>
                                <h6>{el.h1}</h6>
                                <p className="about">{el.p}</p>
                                <p className="data">{el.data}</p>
                            </div>
                        ))}
                    </div>
                </BrowserView>
                <MobileView> {/* Отображение для мобильных устройств*/}
                    <div className="news">
                        {this.state.visibleUsers.map((el) => (
                            <div
                                className="news-list"
                                key={el.id}
                                onClick={() => this.handleClick(el.link, el.id)}
                            >
                                <div className="image">
                                    <img src={el.images[0]} alt={el.h1} style={{ width: "100%" }} />
                                </div>
                                <h6>{el.h1}</h6>
                                <p className="about">{el.p}</p>
                                <p className="data">{el.data}</p>
                            </div>
                        ))}
                    </div>
                </MobileView>
                <Button onClick={this.loadMoreUsers} disabled={allUsersLoaded} /> {/* Кнопка загрузки новых новостей*/}
            </div>
        );
    }
}

export default withNavigation(Users); // Экспорт компонента с навигацией

