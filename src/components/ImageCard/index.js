import React from "react";
import "./style.css";
import "../../images.json";

function ImageCard(props) {
    return(
        <div>
            <img id={props.id} src={props.image} alt={props.name} onClick={props.handleClick}/>
        </div>
    );
};

export default ImageCard;
