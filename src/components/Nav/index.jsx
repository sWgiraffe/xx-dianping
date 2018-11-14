import React, { PureComponent } from 'react';
import NavItem from '../NavItem';
import './style.css';

class Nav extends PureComponent {
  static defaultProps = {
    size: 1
  }

  constructor() {
    super();
    this.state = {
      cur: 1,
      translate1: 0,
      translate2: 360,
      translate3: 360,
      delay1: 0,
      delay2: 0,
      delay3: 0
    };
  }
  
  _touchStart(e) {
    this.setState({
      touchStart: e.touches[0].clientX
    });
  }

  _touchMove(e) {
    const { cur, touchStart } = this.state;
    if (!typeof touchStart === 'number') return;
    const touchEnd = e.touches[0].clientX;
    const offset = touchEnd - touchStart;
    const width = document.body.clientWidth;
    switch(cur) {
      case 1:
        if (offset > 0) break;
        this.setState({
          touchEnd,
          translate1: offset,
          translate2: width + offset,
          delay1: 0,
          delay2: 0
        });
        break;
      case 2:
        if (offset > 0) {
          this.setState({
            touchEnd,
            translate1: offset - width,
            translate2: offset,
            delay1: 0,
            delay2: 0
          });
        } else {
          this.setState({
            touchEnd,
            translate2: offset,
            translate3: width + offset,
            delay2: 0,
            delay3: 0
          });
        }
        break;
      case 3:
        if (offset < 0) break;
        this.setState({
          touchEnd,
          translate2: offset - width,
          translate3: offset,
          delay2: 0,
          delay3: 0
        });
        break;
    }
  }

  _touchEnd() {
    const { cur, touchStart, touchEnd } = this.state;
    if (typeof touchStart !== 'number' || typeof touchEnd !== 'number') return;
    const offset = touchEnd - touchStart;
    const width = document.body.clientWidth;
    if (offset === 0) return;
    if (Math.abs(offset) * 2 < width) {
      switch(cur) {
        case 1:
          if (offset > 0) return;
          this.setState({
            translate1: 0,
            translate2: width,
            delay1: 300,
            delay2: 300
          });
          break;
        case 2:
          if (offset > 0) {
            this.setState({
              translate1: 0 - width,
              translate2: 0,
              delay1: 300,
              delay2: 300,
            });
          } else if (offset < 0) {
            this.setState({
              translate2: 0,
              translate3: width,
              delay2: 300,
              delay3: 300
            });
          }
          break;
        case 3:
          if (offset < 0) return;
          this.setState({
            translate2: 0 - width,
            translate3: 0,
            delay2: 300,
            delay3: 300
          });
          break;
      }
    } else {
      switch(cur) {
        case 1:
          if (offset > 0) break;
          this.setState({
            cur: 2,
            translate1: 0 - width,
            translate2: 0,
            delay1: 300,
            delay2: 300
          });
          break;
        case 2:
          if (offset > 0) {
            this.setState({
              cur: 1,
              translate1: 0,
              translate2: width,
              delay1: 300,
              delay2: 300
            });
          } else if (offset < 0) {
            this.setState({
              cur: 3,
              translate2: 0 - width,
              translate3: 0,
              delay2: 300,
              delay3: 300
            });
          }
          break;
        case 3:
          if (offset < 0) break;
          this.setState({
            cur: 2,
            translate2: 0,
            translate3: width,
            delay2: 300,
            delay3: 300,
          });
          break;
      }

    }
  }

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
    const { data, size } = this.props;
    const { cur,
      translate1,
      translate2,
      translate3,
      delay1,
      delay2,
      delay3,
    } = this.state;
    const items = data.map(item => this._renderItem(item));
    const selector = this._renderSelector(size, cur);
    const width = document.body.clientWidth;
    return (
      <div className="Nav-wrap">
        <div className="nav-group-wrap"
          style={{width: 3 * width}} 
          onTouchStart={e => this._touchStart(e)} 
          onTouchMove={e => this._touchMove(e)} 
          onTouchEnd={e => this._touchEnd(e)}
        >
          <div className="nav-group" style={{width: width, left: '0', transform: `translate(${translate1}px)`, transitionDuration: `${delay1}ms`}}>
            <div className="nav-row">{items[0]}</div>
            <div className="nav-row">{items[1]}</div>
          </div>
          <div className="nav-group" style={{width: width, left: 0 - width, transform: `translate(${translate2}px)`, transitionDuration: `${delay2}ms`}}>
            <div className="nav-row">{items[0]}</div>
            <div className="nav-row">{items[1]}</div>
          </div>
          <div className="nav-group" style={{width: width, left: 0 - 2 * width, transform: `translate(${translate3}px)`, transitionDuration: `${delay3}ms`}}>
            <div className="nav-row">{items[0]}</div>
            <div className="nav-row">{items[1]}</div>
          </div>
        </div>
        <ul className="nav-selector">{selector}</ul>
      </div>
    );
  }
}

export default Nav;