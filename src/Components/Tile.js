import React, { Component } from 'react'
import Board from './Board.js';
import '../index.css'


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }

  render() {
    return (
      <div className="card tile" onClick={this.props.onClick}>
        <p >{this.props.name}</p>
        <img  className=" ml-1 mr-1 mt-auto" src={this.props.image} alt="Expected Image not found" onError={(e)=>{e.target.onerror = null; e.target.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1"}} />
      </div>

    );

  }


}

export default Tile