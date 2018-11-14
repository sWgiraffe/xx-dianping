import React, { PureComponent } from 'react';
import ListItem from '../ListItem';
import './style.css';

class ScrollList extends PureComponent {
  render() {
    return (
      <div className="ScrollList">
        <div className="likeTitle">猜你喜欢</div>
        {this.props.likeItems.map((item, index) => 
          <ListItem key={index} item={item}/>
        )}
        <div className="load-wrap" ref={this.props.loadingRef}>
          <div className="loading-img"></div>
          <span>正在加载</span>
        </div>
      </div>
    );
  }
}

export default ScrollList;