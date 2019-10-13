import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import Loader from './loader.jsx';


class Canvas extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (

       <SVG src={this.props.svgUrl} loader={<Loader />} />

    );
  }
}


export default Canvas;




