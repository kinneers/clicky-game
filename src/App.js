import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavScore from "./components/NavScore";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

class App extends Component {

    state = {
        images
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
                            image={image.source}
                            name={image.name}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;
