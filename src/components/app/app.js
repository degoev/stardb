import React, { Component } from "react";

import "./app.css";
import Header from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../services/swapi-service-context";
import { PeoplePage, StarshipPage } from "../sw-components/sw-items-page";

export default class App extends Component {

  swapiService = new SwapiService()
  
  render() {
    return (
      <SwapiServiceProvider value={this.swapiService} >
        <div className="stardb">
          <ErrorBoundry>

            <Header />

            <RandomPlanet />

            {/* People */}
            <PeoplePage />

            <StarshipPage />

          </ErrorBoundry>
        </div>
      </SwapiServiceProvider>
    );
  }

}

