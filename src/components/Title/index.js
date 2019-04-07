import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="title">
            <div className="jumbotron bg">
                <h1 className="display-4">Welcome to Clicky Game!</h1>
                <h3>To play, click as many images as possible- but don't click any twice!</h3>
                <p>
                * Icons made by <a href="http://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik </a>from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com </a>and licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY </a>
                * Background pattern by Michal from <a href="https://www.toptal.com/designers/subtlepatterns/" title="Subtle Patterns" target="_blank" rel="noopener noreferrer">Subtle Patterns</a>
                </p>
            </div>
        </div>
    );
}

export default Title;