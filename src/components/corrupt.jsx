import React, { Component } from "react";
import "../../assets/stylesheets/emoji-mart.scss";
import { Picker } from "emoji-mart";
import { saveSvgAsPng } from 'save-svg-as-png';
import UIkit from "uikit";

let svgDataLock = 0; // This stops svgOG from being updated the first execution.
let svgOG = [];

class Corrupt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corruptAmount: 0, // Default corruption multiplier
      corruptReplace: 0, // Default corruption target values
      corruptUseMultiplier: false //Default to use corruptAmount as a multiplier for a random value
    };
  }

  handleClick = e => {
    this.setSvgUrl(`https://twemoji.maxcdn.com/2/svg/${e.unified}.svg`);
    console.log(e.unified);
  };

  setCorruptAmount = e => {
    this.setState({
      corruptAmount: e.target.value
    });
    setInterval(this.svgCorrupt(),80);
  };

  setCorruptReplace = e => {
    this.setState({
      corruptReplace: e.target.value
    });
    this.svgCorrupt();
  };

  setCorruptUseMultiplier = e => {
    this.setState({
      corruptUseMultiplier: !this.state.corruptUseMultiplier,
      corruptAmount: 2
    });
  };

  svgReset = (attr = "") => {
    let svgPaths = document.querySelectorAll("svg path");
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute("d", svgOG[i].getAttribute("d"));
    }
  };

  setCorruptValue = () => {
    if (this.state.corruptUseMultiplier) {
      return Math.floor(Math.random() * this.state.corruptAmount);
    }
    return this.state.corruptAmount;
  };

  setSvgUrl = e => {
    svgDataLock = 0;
    svgOG = [];
    if (typeof e === "object") {
      this.props.url(e.target.value);
    } else if (typeof e === "string") {
      this.props.url(e);
    }
    this.svgReset;
  };

  svgCorrupt = () => {
    let corruptTarget = new RegExp(`[${this.state.corruptReplace}]`, "gi");
    let svgPaths = document.querySelectorAll("svg path");
    if (svgDataLock === 0) {
      svgPaths.forEach(function(e, idx) {
        svgOG.push(svgPaths[idx].cloneNode(true));
      });
    }
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].setAttribute("d", svgOG[i].getAttribute("d"));
      svgPaths[i].setAttribute(
        "d",
        svgPaths[i]
          .getAttribute("d")
          .replace(corruptTarget, this.setCorruptValue)
      );
    }
    svgDataLock = 1;
    console.log("corrupting targets " + this.state.corruptReplace);
    console.log("replacing with " + this.state.corruptAmount);
  };

  getSvgPng = () => {
    let download = document.querySelector("#scene > svg");
    let scale = 1;
    if (download.attributes.viewBox.value === "0 0 36 36") {
      saveSvgAsPng(download, "corrupted.png", { scale: 30 });
    } else {
      saveSvgAsPng(download, "corrupted.png");
    }
  };

  render() {
    return (
      <React.Fragment>
        <label
         uk-tooltip="title: Loads an SVG from a URL or paste SVG markup inside.; pos:left"
         className="uk-form-label" for="url">
          Load SVG from URL
        </label>
        <input
          className={"uk-input"}
          placeholder="SVG URL"
          name="url"
          type="text"
          onChange={this.setSvgUrl}
          defaultValue=""
        />

        <br></br>
        <label
        uk-tooltip="title: These are the values that will be replaced.
        345 = 3, 4 and 5 will be replaced. Can also use negative values.; pos:left"
        className="uk-form-label" for="value">
          Target values
        </label>
        <input
          className={"uk-input"}
          type="number"
          name="value"
          onChange={this.setCorruptReplace}
          placeholder="345"
        />

        <br></br>
        <label className="uk-form-label" for="quantity">
          Replace with
        </label>
        <input
          className="uk-range"
          type="range"
          name="quantity"
          min="0"
          max="100"
          onChange={this.setCorruptAmount}
          //defaultValue={this.state.corruptAmount}
          value={this.state.corruptAmount}
        />
        {this.state.corruptAmount}
        <output for="quantity"></output>

        <label>
          <input
            uk-tooltip="title: Corrupts by a random number between zero and 'replace with'.; pos:left"
            className="uk-checkbox"
            type="checkbox"
            checked={this.state.corruptUseMultiplier}
            onChange={this.setCorruptUseMultiplier}
            //defaultValue={this.state.corruptUseMultiplier}
          />
          Use Multiplier?
        </label>

        <br></br>
        <button onClick={this.svgReset} className="uk-button uk-button-primary">
          Reset
        </button>
        <button
          onClick={this.svgCorrupt}
          className="uk-button uk-button-danger"
        >
          CORRUPT
        </button>
        <button  onClick={this.getSvgPng} className='uk-button uk-button-default' style={{'color':'white'}}>
          Download
        </button>
        <br />
        <Picker set="twitter" showPreview={false} onSelect={this.handleClick} />
        <br />
        <a href="https://github.com/x8BitRain/svg-emoji-corrupt"><span class="uk-label label-react">GitHub</span></a>
      </React.Fragment>
    );
  }
}

export default Corrupt;
