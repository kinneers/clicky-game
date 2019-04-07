import React from "react";
import "./style.css";

function NavScore(props) {
    return (
        <ul className="nav fixed-top nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" href="./index.html"><h2>Clicky Game!</h2></a>
            </li>
            <li className="nav-item">
                <h3>Click any image to begin!</h3>
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