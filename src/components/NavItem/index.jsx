import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Link to="/food" className="nav-item">
        <img src={data.img} className="nav-item-img"/>
        <div>
          <span className="nav-item-icontext">{data.text}</span>
        </div>
      </Link>
    );
  }
}

export default NavItem;