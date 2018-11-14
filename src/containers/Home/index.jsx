import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Panel from '../../components/Panel';
import MessageBoard from '../../components/MessageBoard';
import ScrollList from '../../components/ScrollList';
import './style.css';

const mapStateToProps = state => {
  return {
    likeItems: state.likeItems,
    city: state.city,
    navData: state.navData
  }
}

class App extends Component {
  constructor() {
    super();
    this.loadingRef = React.createRef();
    this.timer = null;
  }

  state = {
    likeItems: [],
    size: 2
  }

  componentDidMount() {
    window.addEventListener('scroll', this.shouldLoad);
    this.setState(prevState => ({
      likeItems: this.props.likeItems.slice(0, prevState.size)
    }));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.shouldLoad);
  }

  shouldLoad = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      const top = this.loadingRef.current.getBoundingClientRect().top;
      const clientHeight = document.body.clientHeight;
      if (top < clientHeight) {
        this.setState(prevState => ({
          size: prevState.size + 1,
          likeItems: this.props.likeItems.slice(0, prevState.size + 1)
        }));
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <Header backgroundColor="#f63">
          <div className="Header-wrap">
            <Link className="city" to="city">
              {this.props.city}
            </Link>
            <div className="search">
              输入商户名、地点
            </div>
            <a className="mywrap">
              <div className="my">
              </div>
            </a>
          </div>
        </Header>
        <Nav data={this.props.navData} size={3} />
        <div style={{'height': '10px','backgroundColor': '#f0f0f0'}}></div>
        <Panel />
        <div style={{'height': '10px','backgroundColor': '#f0f0f0'}}></div>
        <MessageBoard />
        <div style={{'height': '10px','backgroundColor': '#f0f0f0'}}></div>
        <ScrollList loadingRef={this.loadingRef} likeItems={this.state.likeItems}/>
      </div> 
    );
  }
}

export default connect(mapStateToProps)(App);