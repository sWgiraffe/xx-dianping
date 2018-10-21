import React, { Component } from 'react';
import './style.css';

class Panel extends Component {
  render() {
    return (
      <div className="Panel-wrap">
        <div className="panel-block">
          <a className="panel-item1">
            <div className="title">新人见面礼</div>
            <div className="description">最高88元</div>
            <img src="//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9920a931cc23fe3952034f6e12927b7.png" width='60px' className="img"/>
          </a>
        </div>
        <div className="panel-block">
          <a className="panel-item2">
            <div className="title">新人见面礼</div>
            <div className="description">最高88元</div>
            <img src="//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9920a931cc23fe3952034f6e12927b7.png" width='60px' className="img"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Panel;