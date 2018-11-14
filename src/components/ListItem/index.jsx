import React, { PureComponent } from 'react';
import './style.css';

class ListItem extends PureComponent {
  render() {
    const item = this.props.item;
    return (
      <div className="ListItem-wrap">
        <div className="itemImage">
          <img width="100%" src="//p0.meituan.net/deal/21761d9c87daa1177c5f7a54b6fb664c291762.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0" />
        </div>
        <div className="itemDetail">
          <div className="itemName">{item.itemName}</div>
          <div className="itemDesc">{item.itemDesc}</div>
          <div className="itemPrice">
            <div className="priceRelated">
              <span className="curPrice">{item.curPrice}</span>
              <span className="oldPrice">{item.oldPrice}</span>
            </div>
            <div className="saleRelated">{`已售${item.saleRelated}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;