import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class RandomPlanet extends Component {
    constructor() {
        super();
        
        this.state = {
            planet: {},
            loading: true
        };
    }

    componentDidMount(){
        this.updatePlanet();

        this.interval = setInterval(this.updatePlanet, 7000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    swapiService = new SwapiService()


    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    };

    updatePlanet = () => {
        console.log("update");
        let id = Math.floor(Math.random() * 18) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        let { planet,
            loading } = this.state;

        let spinner = loading ? <Spinner /> : null;
        let content = !loading ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
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
        <ErrorBoundry>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random-planet.jpg" />
            <div>
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: <span>{population}</span></li>
                    <li className="list-group-item">Rotation period: <span>{rotationPeriod}</span></li>
                    <li className="list-group-item">Diameter: <span>{diameter}</span></li>
                </ul>
                <ErrorButton />
            </div>
        </ErrorBoundry>
    );
};