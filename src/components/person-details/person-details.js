import React, { Component } from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            person: null
        }
    }

    swapiService = new SwapiService()

    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        let { personId } = this.props;
        this.setState({ loading: true })

        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ loading: false, person })
            });
    }

    render() {
        let { person, loading } = this.state;

        if (!person) {
            return null;
        } else if (loading) {
            return (
                <div className="person-details card jumbotron rounded">
                    <Spinner />
                </div>
            );
        }

        return (
            <div className="person-details card jumbotron rounded">
                <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt="person-details.jpg" />

                <div className="card-body">
                    <h4>{person.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender:</span>
                            <span>{person.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year:</span>
                            <span>{person.birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color:</span>
                            <span>{person.eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};