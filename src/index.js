import React from "react";
import ReactDOM from "react-dom";

import SwapiService from "./services/swapi-service";

import App from "./components/app/app";

let swapi = new SwapiService();
swapi.getPerson(3)
    .then((res) => {
        alert(res.name + ", " + res.height + " cм")
    });

ReactDOM.render(<App />, document.getElementById("root"));


