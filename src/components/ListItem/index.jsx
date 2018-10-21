import React, { Component } from 'react';
import './style.css';

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem-wrap">
        <div className="itemImage">
          <img width="100%" src="//p0.meituan.net/deal/21761d9c87daa1177c5f7a54b6fb664c291762.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0" />
        </div>
        <div className="itemDetail">
          <div className="itemName">江西瓦罐养生汤</div>
          <div className="itemDesc">低至7.4折单人餐</div>
          <div className="itemPrice">
            <div className="priceRelated">
              <span className="curPrice">14.8</span>
              <span className="oldPrice">20</span>
            </div>
            <div className="saleRelated">已售52</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;