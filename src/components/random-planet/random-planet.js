import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
    constructor() {
        super();

        this.updatePlanet();

        this.state = {
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            id: null
        };
    }

    swapiService = new SwapiService()

    updatePlanet() {
        let id = Math.floor(Math.random() * 19) + 1;
        this.setState(this.swapiService
            ._transformPlanet(id)
        );
    }

    render() {
        let { id, name, population, rotationPeriod, diameter } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random-planet.jpg" />
                <div>
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population <span>{population}</span></li>
                        <li className="list-group-item">Rotation period <span>{rotationPeriod}</span></li>
                        <li className="list-group-item">Diameter <span>{diameter}</span></li>
                    </ul>
                </div>
            </div>
        );
    }
};