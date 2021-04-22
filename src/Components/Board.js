import React, { Component } from 'react'
import BoardHandler from './BoardHandler.js';
import Tile from './Tile.js';
import '../index.css'
import NewTileForm from './NewTileForm'
import { Helmet } from 'react-helmet';



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.homeScreen = this.homeScreen.bind(this);
        this.addTiles = this.addTiles.bind(this);
        this.activateDeleteTile = this.activateDeleteTile.bind(this);
        this.name = this.props.name;
        this.tiles = this.props.tiles;

        this.state = { newForm: false, delTile: false, tiles: this.tiles, changes: 0, color: 'white' }
    }

    render() {
        let rows = this.createTiles();
        if (!this.state.newForm) {
            return (
                <div className="container text">
                    <Helmet>
                        <style>{`body { background-color: background: #2C3E50;  /* fallback for old browsers */
                                background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
                                background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                ; }`}</style>
                    </Helmet>
                    <div id={this.name} className="container">
                        <h1 className="text-center board-title" style={{color: this.state.color}}>{this.name}</h1>
                        {Object.keys(rows).map(row => {
                            return (
                                <div className="row items__row text-center" key={row}>
                                    {rows[row].map(item => {
                                        return <div className="col-3 mt-2 mb-3 d-flex align-items-stretch">{item}</div>;
                                    })}
                                </div>
                            )
                        })}
                        <button type="submit" className="btn btn-success mb-2  btn-lg" onClick={this.addTiles}>Add Tile</button>
                        <button type="submit" className="btn btn-danger mb-2 float-right btn-lg" onClick={this.activateDeleteTile}>Delete Tile</button>

                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mb-2 ml-auto btn-lg" onClick={this.props.selectBoard}>Select Board</button>
                    </div>
                </div>
            )
        } else
            return (<NewTileForm homeScreen={this.homeScreen} tiles={this.tiles} boardName={this.props.boardName} />)
    }

    homeScreen() {
        this.setState({ newForm: false });
    }

    createTiles() {
        let rows = {};
        let counter = 1, pos = 0;
        this.state.tiles.forEach((tile, idx) => {
            console.log(pos)
            rows[counter] = rows[counter] ? [...rows[counter]] : [];
            if (idx % 4 == 0 && idx !== 0) {
                counter++;
                rows[counter] = rows[counter] ? [...rows[counter]] : []
                rows[counter].push(<Tile className="mt-3 " key={pos} data-key={pos} name={this.state.tiles[idx].name} image={this.state.tiles[idx].image} onClick={this.clickTile.bind(this, pos, this.state.tiles[idx].name)} />);
            } else {
                rows[counter].push(<Tile className="mt-3 " key={pos} data-key={pos} name={this.state.tiles[idx].name} image={this.state.tiles[idx].image} onClick={this.clickTile.bind(this, pos, this.state.tiles[idx].name)} />);
            }
            pos++;
        })
        return rows;
    }

    addTiles() {
        this.setState({ newForm: true });
    }

    changeBackground() {
        if (this.state.color == 'white') 
            this.setState((state, props) => ({ color: 'red' }));
        else
            this.setState((state, props) => ({ color: 'white' }));
    }

    activateDeleteTile() {
        this.setState((state, props) => ({ delTile: !state.delTile }));
        this.changeBackground();
    }

    clickTile(i, name, e) {
        if (this.state.delTile == true) {
            this.tiles.splice(i, 1);
            this.setState((state, props) => ({ changes: state.changes++ }));
            this.setState({ delTile: false });
            this.updateStorage();
            this.changeBackground();
        } else {
            var msg = new SpeechSynthesisUtterance();
            msg.text = name;
            window.speechSynthesis.speak(msg);
        }
    }

    updateStorage() {
        localStorage.setItem(this.props.boardName, JSON.stringify(this.props.tiles));
    }

}

export default Board