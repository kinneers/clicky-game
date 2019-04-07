import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="title">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Clicky Game!</h1>
                <p>To play, click as many images as possible- but don't click any twice!</p>
            </div>
        </div>
    );
}

export default Title;