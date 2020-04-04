import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner/spinner.js";
import ErrorBoundry from "../error-boundry/error-boundry.js";
import ErrorButton from "../error-button/error-button.js";


let WithData = (View) =>{
  return class extends Component {

    swapiService = new SwapiService()
  
    constructor() {
      super();
  
      this.state = {
        data: null
      };
    }
  
    componentDidMount() {
      let {getData} = this.props;
      console.log("mounted item list")
      getData()
        .then((data) => {
          this.setState({ data });
          console.log(data);
        });
    }
  
    componentDidUpdate() {
      console.log("updated item list")
    }
  
    render() {
      let { data } = this.state;
      if (!data) {
        return (
          <Spinner />
        );
      }
  
      return (
        <ErrorBoundry>
          <View data={data} {...this.props} />
          <ErrorButton />
        </ErrorBoundry>
      );
    }
  }
}; 

export default WithData;