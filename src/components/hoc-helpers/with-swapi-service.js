import React from "react";
import { SwapiServiceConsumer } from "../../services/swapi-service-context";

let methodsToProps = (swapiService, Item) => {
     return {
          getData: swapiService[`getAll${Item}s`],
          getItem: swapiService[`get${Item}`],
          getImageUrl: swapiService[`get${Item}Img`]
     };
};

let withSwapiService = (Wrapped) => {
     return (props) => {
          return (
               <SwapiServiceConsumer>{
                    (swapiService) => {
                         return (<Wrapped 
                         {...methodsToProps(swapiService, props.item)}
                         {...props} />);
                    }
               }</SwapiServiceConsumer>
          );
     };
};

export default withSwapiService;