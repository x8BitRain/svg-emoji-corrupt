//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Canvas from './components/canvas.jsx';
import '../assets/stylesheets/application.scss';
import Corrupt from './components/corrupt.jsx';
import panzoom from 'panzoom';

const root = document.getElementById('root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svgLink: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg"
    };
  }

  setSvgLink = (Url) => {
      this.setState({svgLink: Url})
  }

  render () {
  return (
    <div>
    <div id="outer-scene">
      <div id="scene">
      <Canvas svgUrl={this.state.svgLink}/>
      </div>
    </div>
    <div id="controls-panel">
      <div id="controls">
        <Corrupt url={this.setSvgLink} />
      </div>
    </div>
    </div>
   );
  }
};

if (root) {
  ReactDOM.render(<App />, root);
  const svgScene = document.querySelector('#outer-scene');
  panzoom(svgScene); //for the pinch/zoom/pan fuctionality.
}
