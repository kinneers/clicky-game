import React, {Component} from "react";
import "./style.css";
import "../../images.json";

class ImageCard extends Component {
    //Sets the local state of the image card to clicked: false to begin with
    state = {
        clicked: false,
    };
    
    handleClick = (event) => {
        event.preventDefault();
        console.log(event.target);
        //If the clicked image has not yet been clicked...
        if (!this.state.clicked) {
            //...set the new state of this image to true...
            this.setState({ clicked: true });
            //...and call the updateScore function
            this.props.updateScore();
            console.log('The score now updates- Now figure out how to shuffle the cards (and save a high score if time allows)!')
        }
        //If the clicked image has already been clicked...
        else if (this.state.clicked) {
            //Restart the game
            console.log("The game needs to restart!");
            this.props.resetGame();
            //If there is time to get a high score, save the high score
        } else {
            console.log("Oh no! Something went wrong!");
        };
    };

    render() {
        return(
            <div>
                <img src={this.props.image} alt={this.props.name} onClick={this.handleClick}/>
            </div>
        );
    };
};

export default ImageCard;
