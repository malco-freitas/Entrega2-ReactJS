import React, { Component } from 'react';
import './../Instagram.css';

export default class Comentarios extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="comentario">
        <p className="textoComentario"> <b>{this.props.comentador}</b> {this.props.comentario} </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}