/*
Name: Clicky Game!
Developed By: Sarah Kinneer
Date: April, 2019
*/

import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavScore from "./components/NavScore";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

class App extends Component {
    //Set the initial state
    state = {
        score: 0, //holds the current score
        images, //the images that were imported from images.json
        highScore: 0, //holds the high score (is not reset each round)
        clickedImages: [] //array to hold the ids of images as they are clicked
    };

    handleClick = (event) => {
        event.preventDefault();

        /*Sidenote: I originally tried using a boolean "clicked" state in each child, 
        which worked nicely up until the point when the game needed to be reset to a new round... 
        I realized that the state needed to be lifted to the parent to reset.*/

        //Saves the id of the clicked image
        let clickedId = event.target.id;

        //If the clicked image has not yet been clicked it will not be in the clickedImages array...
        if (!this.state.clickedImages.includes(clickedId)) {
            //...so push that image id into the clickedId array...
            this.setState(prevState => ({ clickedImages: [...prevState.clickedImages, clickedId] }));
            //...and call the updateScore function
            this.updateScore();
            console.log('The score now updates- Now figure out how to shuffle the cards (and save a high score if time allows)!')
        }
        //If the clicked image has already been clicked...
        else if (this.state.clickedImages.includes(clickedId)) {
            //Restart the game
            this.resetGame();
        } else {
            console.log("Oh no! Something went wrong!");
        };
    };

    //Called within the handleClick function when an image is newly clicked
    updateScore = () => {
        //Takes the previous score from state and updates it by one and also updates the high score if this is a new high score
        if (this.state.score >= this.state.highScore) {
            this.setState(prevState => { return { score: prevState.score + 1, highScore: this.state.score + 1 }});
        }
        //If this is not a new high score, only updates the current score 
        else {
            this.setState(prevState => { return { score: prevState.score + 1 }});
        };
    }
    
    //Resets the game to the original state EXCEPT for high score
    resetGame = () => {
        this.setState({ score: 0, images, clickedImages: [] });
    }

    render() {
        //Shuffles the images array before passing it to the return for rendering on page
        const shuffleImages = (images) => {
            for (let i = images.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [images[i], images[j]] = [images[j], images[i]];
            }
            return images;
        }
        shuffleImages(images);

        //Returns the JSX
        return (
            <div>
                <NavScore score={this.state.score} highScore={this.state.highScore}></NavScore>
                <Title></Title>
                <Wrapper>
                    {this.state.images.map((image, i) => (
                        <ImageCard
                            key={image.id}
                            image={image.source}
                            name={image.name}
                            id={image.id}
                            clicked={image.clicked}
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
