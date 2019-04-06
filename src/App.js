import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavScore from "./components/NavScore";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

class App extends Component {

    state = {
        score: 0,
        images
    };

    componentDidMount(shuffled) {
        console.log("Component Mounted");
        // this.shuffleImages(images);
        // this.setState({ images: images });
    }

    shuffleImages = (images) => {
        for (let i of images) {
            const j = Math.floor(Math.random() * (i+1));
            [images[i], images[j]] = [images[j], images[i]];
        };
    }

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

    render() {
        return (
            <div>
                <NavScore></NavScore>
                <Title>This is the Title</Title>
                <Wrapper>
                    {this.state.images.map(image => (
                        <ImageCard
                            key={image.id}
                            id={image.id}
                            image={image.source}
                            name={image.name}
                            clicked={image.clicked}
                            handleClick={this.handleClick}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;
