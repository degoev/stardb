import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator.js";

export default class ErrorBoundry extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            console.log('error boundry catch');
            return( <ErrorIndicator /> );
        }
        return this.props.children;
    }
}