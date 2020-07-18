import React, { Component } from 'react';
import './../Instagram.css';

export default class Time extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="tempo">
        <p className="textoTempo"> {this.props.tempo} </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}