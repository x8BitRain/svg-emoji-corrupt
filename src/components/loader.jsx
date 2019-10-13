import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
    <div className="dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    );
  }
}


export default Loader;
