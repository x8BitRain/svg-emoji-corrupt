import React, { Component } from 'react';

class InputBar extends Component {
  // handleUpdate = (event) => {
  //   this.props.searchFunction(event.target.value);
  // }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={console.log('test')}
      />
    );
  }
}

export default InputBar;
