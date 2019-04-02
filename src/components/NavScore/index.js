import React from "react";
import "./style.css";

function NavScore(props) {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" href="http://google.com">Change this to refresh the page</a>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
                <h2 className="score">Score</h2>
            </li>
        </ul>
    );
}

export default NavScore;