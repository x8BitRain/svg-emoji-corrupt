//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Canvas from './components/canvas.jsx';
import InputBar from './components/input-bar.jsx';
import '../assets/stylesheets/application.scss';
import Corrupt from './components/corrupt.jsx';
const root = document.getElementById('root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svgLink: ""
    };
  }

  render () {
  return (
    <div>
      <div id="scene">
      <Canvas />
      </div>
      <div id="controls">
        <InputBar  />
        <Corrupt svgLink={this.state.svgLink} />
      </div>
    </div>
   );
  }
};

if (root) {
  ReactDOM.render(<App />, root);
}
