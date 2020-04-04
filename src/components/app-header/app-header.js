import React from "react";
import { Link } from "react-router-dom";

import "./app-header.css";

let Header = (props) => {
    return (
        <nav className='d-flex'>
            <h1>
                <Link to="/">StarDB</Link>
            </h1>
            <ul className="d-flex" id="buttons">
                <li>
                    <Link to="/people/">
                        <span className="btn btn-secondary">
                            People
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/planets/">
                        <span className="btn btn-secondary">
                            Planets
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/starships/">
                        <span className="btn btn-secondary">
                            Starships
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/login/">
                        <span className="btn btn-secondary">
                            Log In
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/secret/">
                        <span className="btn btn-danger">
                            Secret
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header