import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

let svgDataLock = 0; // This stops svgOG from being updated the first execution.
let svgOG = [];

class Corrupt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corruptAmount: 0, // Default corruption multiplier
      corruptReplace: 345, // Default corruption target values
      corruptUseMultiplier: true //Default to use corruptAmount as a multiplier for a random value
    };
  }

   setCorruptAmount = (e) => {
    this.setState({
      corruptAmount: e.target.value
    });
  }

  setCorruptReplace = (e) => {
    this.setState({
      corruptReplace: e.target.value
    });
  }

  setCorruptUseMultiplier = (e) => {
    this.setState({
      corruptUseMultiplier: !this.state.corruptUseMultiplier
    });
  }

  svgReset = (attr = "") => {
    let svgPaths = document.querySelectorAll("svg path");
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
    }
  }

  setCorruptValue = () => {
    if (this.state.corruptUseMultiplier) {
      return Math.floor(Math.random() * this.state.corruptAmount);
    }
    return this.state.corruptAmount;
  }

  setSvgUrl = (e) => {
    this.props.url(e.target.value);
    this.svgReset;
  }

  svgCorrupt = () => {
    let corruptTarget = new RegExp(`[${this.state.corruptReplace}]`, 'gi');
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
    svgPaths.forEach(function(e, idx){
    svgOG.push(svgPaths[idx].cloneNode(true));});}
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
      svgPaths[i].setAttribute('d', svgPaths[i].getAttribute('d')
        .replace(corruptTarget, this.setCorruptValue));
      }
      svgDataLock = 1;
      console.log("corrupting targets " + this.state.corruptReplace);
      console.log("replacing with " + this.state.corruptAmount);
    };


  render() {
    return (
      <React.Fragment>
      <output for="quantity">
      <input
        type="range"
        name="quantity"
        min="0"
        max="100"
        onChange={this.setCorruptAmount}
        //defaultValue={this.state.corruptAmount}
        value={this.state.corruptAmount}
      />
      {this.state.corruptAmount}
      </output>
      <input
        type="number"
        className="svgCorruptTargetValues"
        onChange={this.setCorruptReplace}
        placeholder="345"
      />
      <label>
      <input
        type="checkbox"
        checked={this.state.corruptUseMultiplier}
        onChange={this.setCorruptUseMultiplier}
        //defaultValue={this.state.corruptUseMultiplier}

      />
      Use Multiplier?
      </label>

      <input
        placeholder="SVG URL"
        type="text"
        className=""
        onChange={this.setSvgUrl}
        defaultValue=""
      />

      <Button onClick={this.svgReset} variant="contained" color="primary" >Reset</Button>
      <Button  onClick={this.svgCorrupt} variant="contained" color="secondary" >CORRUPT</Button>


      </React.Fragment>
    );
  }
}

export default Corrupt;
