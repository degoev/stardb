import React from 'react';

import "./app.css";
import Header from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";

function App() {
  return (
    <div className="stardb">
      <Header />
      <RandomPlanet />
    </div>
  );
}

export default App;
