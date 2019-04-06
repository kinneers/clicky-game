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

    //Called within the handleClick function when an image is newly clicked
    updateScore = () => {
        //Takes the previous score from state and updates it by one
        this.setState(prevState => { return { score: prevState.score + 1 }});
    }
    
    resetGame = () => {
        this.setState({ score: 0, images });
        
    }

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
                            handleClick={this.handleClick}
                            updateScore={this.updateScore}
                            resetGame={this.resetGame}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;
