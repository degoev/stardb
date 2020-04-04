import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import withData from "../hoc-helpers/with-data.js";
import withSwapiService from "../hoc-helpers/with-swapi-service.js";
import withCompose  from "../hoc-helpers/with-compose.js";

import './item-list.css';

let ItemList = (props) => {

  let { data, history } = props;

  const onToggleItem = (id) =>  history.push(id);
  
  

  let itemsList = data.slice().map((item) => {
    return (
      <li className="list-group-item" key={item.id}
        onClick={() => onToggleItem(item.id)}>
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

ItemList.propTypes = {
  onToggleItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func
};

export default withCompose(withRouter, withSwapiService, withData)(ItemList);