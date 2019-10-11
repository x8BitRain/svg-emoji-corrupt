import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/canvas.jsx';
import InputBar from './components/input-bar.jsx';
import '../assets/stylesheets/application.scss';
import Corrupt from './components/corrupt.jsx';
const root = document.getElementById('root');

const App = () =>  {
  return (
    <div>
      <div id="scene">
      <Canvas />
      </div>
      <div id="controls">
        <InputBar />
        <Corrupt />
      </div>
    </div>
  );
};

if (root) {
  ReactDOM.render(<App />, root);
}
