import React, { Component } from 'react';
import './style.css';

class NavItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="nav-item">
        <img src={data.img} className="nav-item-img"/>
        <div>
          <span className="nav-item-icontext">{data.text}</span>
        </div>
      </div>
    );
  }
}

export default NavItem;