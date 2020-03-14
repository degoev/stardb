import React from 'react';

import "./app.css";
import Header from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";
import PersonPage from "../person-page/person-page";

function App() {
  return (
    <div className="stardb">
      <Header />
      <RandomPlanet />
      
      <PersonPage />

    </div>
  );
}

export default App;
