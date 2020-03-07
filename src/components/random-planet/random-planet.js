import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
    constructor(){
        super();

        this.swapiService = new SwapiService();

        this.state = {
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        };
    }

    // updatePlanet(){

    // }

    render() {
        let { name, population, rotationPeriod, diameter } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                <img src="https://starwars-visualguide.com/assets/img/planets/9.jpg" alt="random-planet.jpg" />
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