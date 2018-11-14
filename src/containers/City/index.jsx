import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { changeCity } from '../../actions/city';
import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    _changeCity: cityName => dispatch(changeCity(cityName))
  };
}

class City extends Component {

  _chooseCity = e => {
    this.props._changeCity(e.target.innerHTML);
    this.props.history.goBack();
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header backgroundColor="#fff">
          <div className="CityHead-wrap">
            <a className="back" onClick={() => { history.goBack(-1) }}></a>
            <div className="switch-wrap">
              <a className="on">国内</a>
              <a className="off">国际/港澳台</a>
            </div>
          </div>
        </Header>
        <div className="SearchInput-wrap">
          <div className="SearchInput">
            <div className="innerText">
              输入城市名或拼音查询
            </div>
          </div>
        </div>
        <div className="Location-wrap">
          无法获取您的定位
        </div>
        <div className="Title-wrap">
          热门城市
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>成都</a>
            <a>重庆</a>
            <a>广州</a>
            <a>杭州</a>
            <a>南京</a>
            <a>上海</a>
            <a>深圳</a>
            <a>苏州</a>
            <a>天津</a>
            <a>武汉</a>
            <a>西安</a>
        </div>
        <div className="Title-wrap">
          更多城市
        </div>
        <div className="capital-list">
            <a href="#A">A</a>
            <a href="#B">B</a>
            <a href="#C">C</a>
            <a href="#D">D</a>
            <a href="#E">E</a>
            <a href="#F">F</a>
            <a href="#G">G</a>
            <a href="#H">H</a>
        </div>
        <div id="A" className="Title-wrap">
          A
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div id="B" className="Title-wrap">
          B
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div className="homeplace-list" onClick={this._chooseCity}>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
            <a>北京</a>
        </div>
        <div id="C" className="Title-wrap">
          C
        </div>
        <div id="D" className="Title-wrap">
          D
        </div>
        <div id="E" className="Title-wrap">
          E
        </div>
        <div id="F" className="Title-wrap">
          F
        </div>
        <div id="G" className="Title-wrap">
          G
        </div>
        <div id="H" className="Title-wrap">
          H
        </div>
      </div>
    );
  }
}

export default connect('', mapDispatchToProps)(City);