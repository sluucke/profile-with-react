import React, { useState, Component } from 'react';

import './style.css';
import CloseButton from '../../assets/images/menu-close.svg';
import OpenButton from '../../assets/images/menu-open.png';
class Header extends Component {
  state = {
    sideBarOpen: false,
  };
  handleOpen = () => {
    this.setState({
      sideBarOpen: true,
    });
  };
  handleClose = () => {
    this.setState({
      sideBarOpen: false,
    });
  };
  render() {
    return (
      <header>
        <div className={`menu ${this.state.sideBarOpen ? 'open' : ''}`}>
          <div className="logo">
            <img
              src="https://cdn.discordapp.com/avatars/572827880091025408/a_45b6ad05feea7ae92140edfec7e5c860.gif?size=128"
              alt="JR Profile Image"
            />
          </div>

          <button className="btn-open" onClick={this.handleOpen}>
            <img src={OpenButton} alt="open-button" />
          </button>

          <button className="btn-close" onClick={this.handleClose}>
            <img src={CloseButton} alt="close-button" />
          </button>

          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li id="github">
                <a href="">Github</a>
              </li>
            </ul>

            <div className="info">
              <hr />
              <div className="content">
                <picture>
                  <img
                    src="https://cdn.discordapp.com/avatars/572827880091025408/a_45b6ad05feea7ae92140edfec7e5c860.gif?size=128"
                    alt="JR Profile Image"
                  />
                </picture>
                <div>
                  <a href="#">
                    <strong>João Rafael</strong>
                    <br />
                    <small>joaorceschini@gmail.com</small>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
