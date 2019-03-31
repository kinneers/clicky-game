import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavScore from "./components/NavScore";

class App extends Component {
    render() {
        return (
            <div>
                <NavScore></NavScore>
                <Title>This is the Title</Title>
                <Wrapper>The Cards Will Go Here</Wrapper>
            </div>
        );
    }
}

export default App;
