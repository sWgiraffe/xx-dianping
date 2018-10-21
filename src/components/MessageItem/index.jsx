import React, { Component } from 'react';
import './style.css';

class MessageItem extends Component {
  render() {
    return (
      <div className="MessageItem-wrap">
        <img width="100%" src="//p1.meituan.net/deal/fabe204ab8ea6368580d18869e33b21986392.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20"/>
        <div className="itemName">吾麦尔牛肉面</div>
        <div>
          <span className="curPrice">9</span>
          <span className="oldPrice">10.5</span>
        </div>
      </div>
    );
  }
}

export default MessageItem;