import React, { Component } from 'react'
import '../form.css';
import '../index.css'
import Tile from './Tile.js';
import checkImage from '../Components/imgs/check.png'
import { Helmet } from 'react-helmet';

class NewTileForm extends React.Component {
  constructor(props) {
    super(props);
    this.length = 0;
    this.hungry = "Hungry"
    this.state = { name: this.hungry, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1" }
  }

  render() {
    return (
      <div className>
        <Helmet>
          <style>{'body { background: -webkit-linear-gradient(left, #0072ff, #00c6ff); }'}</style>
        </Helmet>
        <div className="container contact-form">
          <div className="contact-image">
            <img src={checkImage} alt="rocket_contact" />
          </div>
          <form onSubmit={this.handleSubmit} id="submit-form">
            <h1>Create a new Tile</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <h4>Tile Name</h4>
                </div>
                <div className="form-group">
                  <input type="text" name="txtName" className="form-control" placeholder="Hungry *" maxLength="25" onChange={(event) => { this.handleNameChange(event.target.value) }} required />
                </div>
                <div className="form-group">
                  <h4>Image URL</h4>
                  <input type="text" name="txtEmail" className="form-control" placeholder="https://example.com *" onChange={(event) => { this.checkImage(event.target.value) }} required />
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <input type="submit" name="btnSubmit" className="btnContact btn-primary" value="Add Tile" />
                </div>
                <div className="form-group">
                  <input type="submit" name="btnSubmit" className="btnContact btn-success" value="Submit" onClick={this.props.homeScreen} />
                  <input type="submit" className="btnContact" value="Cancel" onClick={this.props.homeScreen} />
                </div>
                <div className="form-group">

                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="form-group">
                  <Tile className="mt-3" name={this.state.name} image={this.state.image} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.tiles.push({ "name": event.target[0].value, "image": event.target[1].value });
    localStorage.setItem(this.props.boardName, JSON.stringify(this.props.tiles));
    document.getElementById("submit-form").reset();
  }

  handleNameChange(event) {
    /*let newLet = event.nativeEvent.data;
    if (this.length == 0 && newLet != null) {
      this.setState({ name: event.nativeEvent.data });
      this.length++;
    }
    else if (this.length == 1 && newLet == null) {
      this.setState({ name: this.hungry });
      this.length--;
    }
    else if (newLet != null) {
      this.setState({ name: this.state.name + event.nativeEvent.data });
      this.length++;
    } else {
      this.setState({ name: this.state.name.slice(0, -1) });
      this.length--;
    }*/
    this.setState( {name: event });
  }

  checkImage(event) {
    this.setState({ image: event });
  }
}

  export default NewTileForm