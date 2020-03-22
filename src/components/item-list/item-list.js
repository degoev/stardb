import React from 'react';

import withData from "../hoc-helpers/with-data";
import './item-list.css';

let ItemList = (props) => {

  let { onToggleItem, data } = props;

  let itemsList = data.slice().map((item) => {
    return (
      <li className="list-group-item" key={item.id} onClick={() => onToggleItem(item.id)}>
        {item.name}
      </li>
    );
  });

  return (
      <ul className="item-list list-group">
        { itemsList }
      </ul>
  );
}

export default withData(ItemList);