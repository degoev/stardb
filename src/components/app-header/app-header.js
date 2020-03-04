import React from "react";
import "./app-header.css";

let Header = (props) => {
    return (
        <nav className='d-flex'>
            <h1>
                <a href="/">
                    StarDB
                </a>
            </h1>
            <ul className="d-flex" id="buttons">
                <li className="btn btn-secondary">
                    <a href="/">People</a>
                </li>
                <li className="btn btn-secondary">
                    <a href="/">Planets</a>
                </li>
                <li className="btn btn-secondary">
                    <a href="/">Starships</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header