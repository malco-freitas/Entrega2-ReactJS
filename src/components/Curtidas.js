import React, { Component } from 'react';
import './../Instagram.css';

export default class Curtidas extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p className="texto">{this.props.likes} curtidas</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
