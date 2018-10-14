import React, { Component } from 'react';
import NavItem from '../NavItem';
import './style.css';

class Nav extends Component {
  _renderItem(data) {
    return data.map((item, index) => 
      <NavItem data={item} key={index}/>
    );
  }

  _renderSelector(size, cur) {
    const selector = [];
    for (let i = 0; i < size; i++) {
      selector.push(<li className={i + 1 === cur ? "circle on" : "circle"} key={i}></li>);
    }
    return selector;
  }

  render() {
    const { data, size, cur } = this.props;
    const items = this._renderItem(data);
    const selector = this._renderSelector(size, cur);
    return (
      <div className="Nav-wrap">
        <div className="nav-row">{items}</div>
        <div className="nav-row">{items}</div>
        <ul className="nav-selector">{selector}</ul>
      </div>
    );
  }
}

export default Nav;