import React, { Component } from 'react';

class InputBar extends Component {
  render() {
    return (
      <input
        type="text"
        className=""
        onChange={this.handleUpdate}
      />
    );
  }
}

export default InputBar;
