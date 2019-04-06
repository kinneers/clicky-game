import React, {Component} from "react";
import "./style.css";
import "../../images.json";

class ImageCard extends Component {
    //Sets the local state of the image card to false
    state = {
        clicked: false
    };

    componentDidMount() {
        console.log("This individual component mounted- there should be 12 of this message");
    };

    handleClick = (event) => {
        event.preventDefault();
        console.log(event.target);
        console.log(this.state);
        if (!this.state.clicked) {
            this.setState({clicked: true});
        } else if (this.state.clicked) {
            console.log("The game needs to restart!");
        } else {
            console.log("There is a problem here!");
        };
    };

    render(props) {
        return(
            <div>
                <img src={this.props.image} alt={this.props.name} onClick={this.handleClick}/>
            </div>
        );
    };
};

export default ImageCard;
