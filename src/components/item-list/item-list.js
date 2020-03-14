import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService()

  constructor(){
    super();
    
    this.state = {
      peopleList: null
    };
  }
  

  componentDidMount(){
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
      this.setState({peopleList})
      console.log(peopleList)
    });
    
  }

  render() {
    let {onTogglePerson} =this.props;
    let {peopleList} = this.state;
    if(!peopleList){
      return(
        <Spinner />
      );
    }
    let content = peopleList.slice();
    content = peopleList.map((item)=>{
      return(
        <li className="list-group-item" key={item.id} onClick={() => onTogglePerson(item.id)}>
          { item.name }
        </li>
      );
    });
    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}