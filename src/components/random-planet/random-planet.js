import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import Error from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
    constructor() {
        super();

        this.updatePlanet();

        //setInterval(async () => await this.updatePlanet(), 5000);

        this.state = {
            planet: {},
            loading: true,
            error: false
        };
    }

    swapiService = new SwapiService()

    onError = () => {
        this.setState({ error: true, loading: false })
    };

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    };

    updatePlanet = () => {
        console.log("update")
        let id = Math.floor(Math.random() * 18) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        let { planet,
            loading,
            error } = this.state;

        let hasData = !(loading || error);    
        let err = error ? <Error /> : null;
        let spinner = loading ? <Spinner /> : null;
        let content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {err}
                {spinner}
                {content}
            </div>
        );
    }
};

let PlanetView = ({ planet }) => {
    let { id, name, population,
        rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random-planet.jpg" />
            <div>
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: <span>{population}</span></li>
                    <li className="list-group-item">Rotation period: <span>{rotationPeriod}</span></li>
                    <li className="list-group-item">Diameter: <span>{diameter}</span></li>
                </ul>
            </div>
        </React.Fragment>
    );
};