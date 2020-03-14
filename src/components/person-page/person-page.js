import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Error from "../error-indicator/error-indicator";

export default class PersonPage extends Component {
    constructor(){
        super();
        this.state ={
            toggledPersonId: null,
            hasError: false
        }
    }

    togglePerson = (toggledPersonId) => {
        this.setState({toggledPersonId})
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }

    render() {
        let { toggledPersonId, hasError } = this.state;

        if(hasError){
            return( <Error /> );
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onTogglePerson={this.togglePerson} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={toggledPersonId} />
                </div>
            </div>
        );
    }
};