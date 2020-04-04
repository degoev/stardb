import React, { Component } from "react";
import "./item-details.css";

import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner/spinner.js";
import ErrorButton from "../error-button/error-button.js";
import ErrorBoundry from "../error-boundry/error-boundry.js";
import withSwapiService from "../hoc-helpers/with-swapi-service.js";

class ItemDetails extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            item: null
        }
    }

    swapiService = new SwapiService()

    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemID !== prevProps.itemID) {
            console.log("item details did update");
            this.updateItem();
        }
    }

    updateItem = () => {
        let { itemID, getItem } = this.props;
        this.setState({ loading: true })

        if (!itemID) {
            return;
        }

        getItem(itemID)
            .then((item) => {
                this.setState({ item, loading: false });
                console.log(item);
            });
    }

    render() {
        let { item, loading } = this.state;

        if (!item) {
            return null;
        } else if (loading) {
            return (
                <div className="person-details card jumbotron rounded">
                    <Spinner />
                </div>
            );
        } 

        let cardData = this.props.cardData(item);
        let { cardProps, getImageUrl } = this.props;
        return (
            <ErrorBoundry>
                <div className="person-details card jumbotron rounded">
                    <img className="person-image"
                        src={getImageUrl(item.id)} alt="person-details.jpg" />

                    <div className="card-body">
                        <h4>{cardData[0]}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">{cardProps[0]}</span>
                                <span>{cardData[1]}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">{cardProps[1]}</span>
                                <span>{cardData[2]}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">{cardProps[2]}</span>
                                <span>{cardData[3]}</span>
                            </li>
                        </ul>
                        <ErrorButton />
                    </div>
                </div>
            </ErrorBoundry>
        );
    }
};

export default withSwapiService(ItemDetails);