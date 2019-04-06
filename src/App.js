import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavScore from "./components/NavScore";
import ImageCard from "./components/ImageCard";
//import Shuffle from 'shufflejs';
import images from "./images.json";

class App extends Component {

    state = {
        score: 0,
        images,
        highScore: 0
    };

    componentDidMount(shuffled) {
        console.log("Component Mounted");
        
    }

    // shuffleImages = (images) => {
    //     for (let i of images) {
    //         const j = Math.floor(Math.random() * (i+1));
    //         [images[i], images[j]] = [images[j], images[i]];
    //     };
    // }

    //Called within the handleClick function when an image is newly clicked
    updateScore = () => {
        //Takes the previous score from state and updates it by one
        if (this.state.score >= this.state.highScore) {
            this.setState(prevState => { return { score: prevState.score + 1, highScore: this.state.score + 1 }});
        } else {
            this.setState(prevState => { return { score: prevState.score + 1 }});
        };
    }
    
    resetGame = () => {
        this.setState({ score: 0, images });
        
    }

    render() {
        return (
            <div>
                <NavScore score={this.state.score} highScore={this.state.highScore}></NavScore>
                <Title>This is the Title</Title>
                <Wrapper>
                    {this.state.images.map((image, i) => (
                        <ImageCard
                            key={i}
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
