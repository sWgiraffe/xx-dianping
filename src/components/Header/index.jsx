import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-wrap">
        <a className="city">成都</a>
        <div className="search">
          输入商户名、地点
        </div>
        <a className="mywrap">
          <div className="my">
          </div>
        </a>
      </div>
    );
  }
}

export default Header;