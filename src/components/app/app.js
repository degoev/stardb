import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../services/swapi-service-context";

import "./app.css";
import Header from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundry from "../error-boundry/error-boundry";
import { 
  PeoplePage, 
  StarshipsPage, 
  PlanetsPage, 
  StarshipDetails, 
  PlanetsDetails } from "../sw-components/sw-items-page";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  onLogIn = () => {
    this.setState({
      isLoggedIn: true 
    })
  }

  swapiService = new SwapiService()

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService} >
        <Router>
          <div className="stardb">
            <ErrorBoundry>

              <Header />

              <RandomPlanet updateInteval={5000} />
              <Switch>
                <Route path="/" 
                render={() => <h2>Welcome to StarDB</h2>}
                exact />

                <Route path="/people/:id?"
                  render={
                    ({ match }) => {
                      let {id} = match.params;
                      console.log(match);
                      return <PeoplePage itemID={id} />
                    }
                  } />

                <Route path="/starships/" component={StarshipsPage} exact />
                <Route path="/starships/:id"
                  render={
                    ({ match }) => {
                      let {id} = match.params;
                      return <StarshipDetails itemID={id} />
                    }
                  } />

                <Route path="/planets/" component={PlanetsPage} exact />
                <Route path="/planets/:id"
                  render={
                    ({ match }) => {
                      let {id} = match.params;
                      return <PlanetsDetails itemID={id} />
                    }
                  } />
                <Route path="/login/" render={() => <LoginPage isLoggedIn={this.state.isLoggedIn} onLogIn={this.onLogIn} />} exact />
                <Route path="/secret/" 
                  render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />} 
                  exact />
                <Route render={() => <h2>Page not found</h2> }/>
              </Switch>
            </ErrorBoundry>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }

}

