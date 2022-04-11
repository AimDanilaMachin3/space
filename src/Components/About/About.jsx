import React, { Component } from 'react';
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card">
                    <img
                    src="https://avatars.githubusercontent.com/u/58563393?v=4"
                    className="cardImg"
                    alt="profileGit"
                    />
                    <div className="card-body">
                        <h3>
                            Автор проекта группы РПИС-91: 
                            <br/>Кириллов Данила Владимирович
                        </h3>
                        <a href="https://github.com/AimDanilaMachin3" className="button" target="_blank">
                            Перейти на GitHub
                        </a>
                    </div>
                </div>
          </div>
        );
    }
}

export default About;