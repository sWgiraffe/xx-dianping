import React, { PureComponent } from 'react';
import MessageItem from '../MessageItem';
import './style.css';

class MessageBoard extends PureComponent {
  render() {
    return (
      <div className="MessageBoard-wrap">
        <div className="header">
          <span className="title">超值特惠</span>
          <div>
            <span className="more">更多优惠</span>
            <i className="arrowRight"></i>
          </div>
        </div>
        <div className="items">
          <MessageItem />
          <MessageItem />
          <MessageItem />
        </div>
      </div>
    );
  }
}

export default MessageBoard;