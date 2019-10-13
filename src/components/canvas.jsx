import React, { Component } from 'react';
import SVG from 'react-inlinesvg';


class Canvas extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (

       <SVG src={this.props.svgUrl} />

    );
  }
}


export default Canvas;




