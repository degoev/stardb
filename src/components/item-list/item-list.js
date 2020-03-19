import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorButton from "../error-button/error-button";

import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService()

  constructor(){
    super();
    
    this.state = {
      itemsList: null
    };
  }
  

  componentDidMount(){
    let { getData } = this.props;
    getData()
      .then((itemsList) => {
        this.setState({ itemsList });
        console.log(itemsList);
      });

  }

  render() {
    let {onToggleItem} =this.props;
    let {itemsList} = this.state;
    if(!itemsList){
      return(
        <Spinner />
      );
    }
    let content = itemsList.slice();
    content = itemsList.map((item)=>{
      return(
        <li className="list-group-item" key={item.id} onClick={() => onToggleItem(item.id)}>
          { item.name }
        </li>
      );
    });
    return (
      <ErrorBoundry>
        <ul className="item-list list-group">
          {content}
        </ul>
        <ErrorButton />
      </ErrorBoundry>
    );
  }
}