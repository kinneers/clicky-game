import React from "react";
import "./style.css";

function NavScore(props) {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" href="./index.html"><h2>Clicky Game!</h2></a>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
                <h2 className="score">Current Score: {props.score}/12</h2>
            </li>
            <li className="nav-item">
                <h2 className="score">High Score: {props.highScore}/12</h2>
            </li>
        </ul>
    );
}

export default NavScore;