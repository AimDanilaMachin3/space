import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "./img/spaceLogo.png";
import About from "../About/About";
import New from "../New/New";
import PinNews from "../PinNews/PinNews";

class Header extends Component {
  render() {
    return (
      <>
        <div className="contentHeader">
          <div className="contentContainer">
            <div className="logo wer">
              <img src={logo} alt="" className="logoImg" />
              <p className="logoText">SpaceNews</p>
            </div>

            <div className="newsFind">
              <div className="dispFlex">
                <input
                  type="text"
                  placeholder="Поиск по новостям"
                  className="input"
                />
                <button className="buttonFind">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                        fill="#392B4B"
                      />
                      <path
                        d="M11.4118 8.58603C11.7908 8.96603 11.9998 9.46802 11.9998 10H13.9998C14.0007 9.47445 13.8974 8.95392 13.6959 8.46851C13.4944 7.9831 13.1987 7.54245 12.8258 7.17202C11.3118 5.66002 8.68683 5.66002 7.17383 7.17202L8.58583 8.58803C9.34583 7.83003 10.6558 7.83203 11.4118 8.58603Z"
                        fill="#392B4B"
                      />
                    </g>
                  </svg>
                </button>
              </div>

              <NavLink to="/news" className="headerLinks">
                Новости
              </NavLink>
              <NavLink to="/bookmarks" className="headerLinks">
                Закрепленые новости
              </NavLink>
              <NavLink to="/about" className="headerLinks">
                Страница об авторе
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
