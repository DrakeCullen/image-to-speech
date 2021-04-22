import React, { Component } from 'react'
import Board from './Board.js';
import '../index.css'
import { Helmet } from 'react-helmet';
import checkImage from '../Components/imgs/check.png'

// Now update the states when an item is updated in the board

class BoardHandler extends React.Component {
    constructor(props) {
        super(props);
        this.apple = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LElaIzkrLIndPvZg-j5CQwHaIe%26pid%3DApi&f=1';
        this.water = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FWater-Cup-PNG-High-Quality-Image.png&f=1&nofb=1';
        this.meal = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1';
        this.bathroom = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Funisex-restroom-sign-decal-9.png&f=1&nofb=1';
        this.play = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F76-763452_abc-blocks-png-abc-alphabet.png&f=1&nofb=1';
        this.default = [{ "name": "Snack", "image": this.apple }, { "name": "Thirsty", "image": this.water }, { "name": "Lunch", "image": this.meal }, { "name": "Bathroom", "image": this.bathroom }, { "name": "Play", "image": this.play }];
        this.tiles = [];
        this.boardName = '';
        this.selectBoard = this.selectBoard.bind(this);
        this.state = { selectBoard: true }
    }

    render() {
        if (this.state.selectBoard)
            return (this.boardForm());
        else
            return (<Board name={this.boardName} tiles={this.tiles} boardName={this.boardName} selectBoard={this.selectBoard} />);

    }

    boardForm() {
        return (<div className>
            <Helmet>
                <style>{'body { background: -webkit-linear-gradient(left, #0072ff, #00c6ff); }'}</style>
            </Helmet>
            <div className="container contact-form">
                <div className="contact-image">
                    <img src={checkImage} alt="rocket_contact" />
                </div>
                <form onSubmit={this.submit} id="submit-board">
                    <h1>Create/Load a Board</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Board Name</h4>
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Drake's Board *" required />
                            </div>
                            <div className="d-flex justify-content-center mb-2">
                                <input type="submit" name="btnSubmit" className="btnContact btn-success" value="Create" onClick={() => (this.state.button = 2)}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btnContact btn-primary" value="Load" onClick={() => (this.state.button = 1)} />
                                <input type="submit" className="btnContact btn-danger" value="Delete"  onClick={() => (this.state.button = 3)}/>
                            </div>
                            <div className="form-group">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
    }

    submit = (event) => {
        event.preventDefault()
        //Load
        if (this.state.button == 1) {
            if (localStorage.getItem(event.target[0].value)) {
                this.tiles = JSON.parse(localStorage.getItem(event.target[0].value));
                this.boardName = event.target[0].value;
                this.setState({ selectBoard: false })
            }
            else alert("Board not found")
        }
        //Create
        else if (this.state.button == 2) {
            if (JSON.parse(localStorage.getItem(event.target[0].value)) == null) {
                this.tiles = JSON.parse(JSON.stringify(this.default))
                localStorage.setItem(event.target[0].value, JSON.stringify(this.tiles));
                this.boardName = event.target[0].value;
                this.setState({ selectBoard: false });
            } else alert("Board already exists")
        //Delete
        } else {
            localStorage.removeItem(event.target[0].value);
            document.getElementById("submit-board").reset();
        }
        
    }

    selectBoard() {
        this.setState({ selectBoard: true });
    }
}

export default BoardHandler