import React, { Component } from 'react';
import SVG from 'react-inlinesvg';


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg'
    };
  }

  render() {
    return (

       <SVG src={this.state.svgUrl} />

    );
  }
}


export default Canvas;
