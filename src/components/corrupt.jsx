import React, { Component } from 'react';
let svgDataLock = 0; // This stops svgOG from being updated the first execution.
let svgOG = [];

class Corrupt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corruptAmount: 0,
      corruptReplace: 0
    };
  }

  // getInitialState() {
  //   return {
  //     corruptAmount: 1
  //   };
  // }

   setCorruptAmount = (e) => {
    this.setState({
      corruptAmount: e.currentTarget.value
    });
  }

  svgReset = () => {
    let svgPaths = document.querySelectorAll("svg path");
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
    }
  }

  getRand = () => Math.floor(Math.random() * this.state.corruptAmount);

  svgCorrupt = () => {
    console.log(this.state.corruptAmount);
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
    svgPaths.forEach(function(e, idx){
    svgOG.push(svgPaths[idx].cloneNode(true));});}
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
      svgPaths[i].setAttribute('d', svgPaths[i].getAttribute('d').replace(/[89]/g, this.getRand));
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

      </React.Fragment>
    );
  }
}

export default Corrupt;
