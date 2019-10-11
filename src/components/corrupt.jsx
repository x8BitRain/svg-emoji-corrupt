import React, { Component } from 'react';
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
      corruptAmount: e.currentTarget.value
    });
  }

  setCorruptReplace = (e) => {
    this.setState({
      corruptReplace: e.currentTarget.value
    });
  }

  setCorruptUseMultiplier = (e) => {
    this.setState({
      corruptUseMultiplier: !this.state.corruptUseMultiplier
    });
    console.log('changed state');
  }

  svgReset = () => {
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

  svgCorrupt = () => {
    let corruptTarget = new RegExp(`[${this.state.corruptReplace}]`, 'gi');
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
    svgPaths.forEach(function(e, idx){
    svgOG.push(svgPaths[idx].cloneNode(true));});}
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
      svgPaths[i].setAttribute('d', svgPaths[i].getAttribute('d').replace(corruptTarget, this.setCorruptValue));
      }
      svgDataLock = 1;

    };


  render() {
    return (
      <React.Fragment>
      <button onClick={this.svgCorrupt}>Fucc me up</button>
      <button onClick={this.svgReset}>Reset</button>
      <input
        type="range"
        name="quantity"
        min="0"
        max="100"
        onInput={this.setCorruptAmount}
        value={this.state.corruptAmount}
      />
      <output
        for="quantity">{this.state.corruptAmount}
      </output>
      <input
        type="text"
        className="svgCorruptTargetValues"
        onChange={this.setCorruptReplace}
      />
      <label>
      <input
        type="checkbox"
        className="cecl"
        checked={this.state.corruptUseMultiplier}
        onChange={this.setCorruptUseMultiplier}
      />
      Use Multiplier?
      </label>

      </React.Fragment>
    );
  }
}

export default Corrupt;
