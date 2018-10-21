import React, { Component } from 'react';
import ListItem from '../ListItem';
import './style.css';

class ScrollList extends Component {
  render() {
    return (
      <div className="ScrollList">
        <div className="likeTitle">猜你喜欢</div>
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default ScrollList;