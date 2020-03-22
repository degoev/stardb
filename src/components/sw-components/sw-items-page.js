import React from "react";

import ItemsPage from "../items-page/items-page";

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

let PeoplePage = () => {
     return <ItemsPage item="Person" {...personsData} />
};

let StarshipPage = () => {
     return <ItemsPage item="Starship" {...starshipData} />
};

export {
     PeoplePage,
     StarshipPage
};

