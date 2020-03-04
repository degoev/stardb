import React from "react";
import "./random-planet.css";

let RandomPlanet = (props) => {
    return (
        <div className="random-planet jumbotron rounded">
            <img src="https://starwars-visualguide.com/assets/img/planets/9.jpg" alt="random-planet.jpg" />
            <div id="rp-text">
                <h3>Coruscant</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population <span>100 000 00</span></li>
                    <li className="list-group-item">Rotation period <span>1000</span></li>
                    <li className="list-group-item">Diameter <span>100</span></li>
                </ul>
            </div>
        </div>
    );
};

export default RandomPlanet