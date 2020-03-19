import React, { Component } from "react";

import "./app.css";
import Header from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";
import ItemsPage from "../items-page/items-page";
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  starshipData = {
    cardData(item) {
      return [item.name, item.model, item.manufacturer, item.costInCredits]
    },
    getData(){
      return (new SwapiService()).getAllStarships;
    },
    getItem(){
      return (new SwapiService()).getStarship;
    },
    imgUrl: "starships",
    cardProps: ["Model:", "Manufacturer:", "Cost:"]
  }

 peopleData = {
    cardData(item) {
      return [item.name, item.gender, item.birthYear, item.eyeColor]
    },
    getData(){
      return (new SwapiService()).getAllPeople;
    },
    getItem(){
      return (new SwapiService()).getPerson;
    },
    imgUrl: "characters",
    cardProps: ["Gender:", "Birth Year:", "Eye Color:"]
  }

  render(){
    return (
      <div className="stardb">
        <ErrorBoundry>
  
          <Header />
  
          <RandomPlanet />
  
          {/* People */}
          <ItemsPage data={this.peopleData} />

          <ItemsPage data={this.starshipData} />
  
        </ErrorBoundry>
      </div>
    );
  }
  
}

