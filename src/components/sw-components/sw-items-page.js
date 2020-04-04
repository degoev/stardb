import React from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";

let personsData = {
     cardData(item) {
          return [item.name, item.gender, item.birthYear, item.eyeColor]
     },
     cardProps: ["Gender:", "Birth Year:", "Eye Color:"]
}

let starshipData = {
     cardData(item) {
          return [item.name, item.model, item.manufacturer, item.costInCredits]
     },
     cardProps: ["Model:", "Manufacturer:", "Cost:"]
};

let planetsData = {
     cardData(item) {
          return [item.name, item.population, item.rotationPeriod, item.diameter]
     },
     cardProps: ["Population:", "Rotation period:", "Diameter:"]
};


// Pages
let PeoplePage = ({itemID}) => {
     return <Row left={<ItemList object="Person" />} 
     right={<ItemDetails object="Person" {...personsData} itemID={itemID} />} />
};

let StarshipsPage = () => {
     return <ItemList object="Starship" />
};

let PlanetsPage = () => {
     return <ItemList object="Planet" />
};


// Details

let StarshipDetails = (props) => {
     return <ItemDetails object="Starship" {...starshipData} {...props} />
};

let PlanetsDetails = (props) => {
     return <ItemDetails object="Planet" {...planetsData} {...props} />
};

export {
     PeoplePage,
     StarshipsPage,
     PlanetsPage,
     StarshipDetails,
     PlanetsDetails
};

