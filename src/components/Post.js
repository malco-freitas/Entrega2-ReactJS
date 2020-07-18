import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.likes} curtidas</p>
        <p>HÁ {this.props.tempo}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
