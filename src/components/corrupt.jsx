import React, { Component } from 'react';
const getRand = () => Math.floor(Math.random() * 10) ;
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

  getInitialState() {
    return {
      corruptAmount: 50
    };
  }

   setCorruptAmount = (e) => {
    this.setState({
      corruptAmount: e.currentTarget.value
    });
  }

  svgReset = () => {
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
    }
  }



  svgCorrupt = () => {
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
    svgPaths.forEach(function(e, idx){
    svgOG.push(svgPaths[idx].cloneNode(true));});}
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
      svgPaths[i].setAttribute('d', svgPaths[i].getAttribute('d').replace(/[89]/g, this.state.corruptAmount));
      }
      svgDataLock = 1;
    };


  render() {
    return (
      <React.Fragment>
      <button onClick={this.svgCorrupt}>Fucc me up</button>
      <button onClick={this.svgCorrupt}>Reset</button>
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
