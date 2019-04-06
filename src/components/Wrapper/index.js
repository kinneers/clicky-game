import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="wrapper">
        {/* FIX THIS: THE CONTAINER IS RESIZING THE IMAGES */}
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Wrapper;
