import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  static defaultProps = {
    backgroundColor: '#fff'
  }
  
  render() {
    return (
      <div className="Header" style={{backgroundColor: this.props.backgroundColor}}>
        {this.props.children}
      </div>
    );
  }
}

export default Header;