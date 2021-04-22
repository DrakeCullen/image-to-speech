import React, { Component } from 'react'
import BoardHandler from './Components/BoardHandler'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BoardHandler />
        );

    }
}

export default App