import React, { Component } from 'react';
const getRand = () => Math.floor(Math.random() * 10) ;
let svgDataLock = 0; // This stops svgOG from being updated the first execution.
let svgOG = [];

class Corrupt extends Component {

  svgCorrupt = () => {
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
    svgPaths.forEach(function(e, idx){
    svgOG.push(svgPaths[idx].cloneNode(true));
      });
    }

    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute('d', svgOG[i].getAttribute('d'));
      //console.log('reset');
      svgPaths[i].setAttribute('d', svgPaths[i].getAttribute('d').replace(/[89]/g, getRand));
      }
      //console.log('b');
      svgDataLock = 1;
    };

  render() {
    return (
      <button onClick={this.svgCorrupt}>Fucc me up</button>
    );
  }
}

export default Corrupt;
