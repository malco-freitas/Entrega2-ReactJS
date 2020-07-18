import React, { Component } from 'react';
import Post from './components/Post.js';
import './Instagram.css';

export default class Instagram extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      likes: 79,
    };
  }

  changeLikeColor = () => {
    if (this.state.liked === true) {
      this.setState({ liked: false });
      this.setState({ likes: this.state.likes - 1 });
    } else {
      this.setState({ liked: true });
      this.setState({ likes: this.state.likes + 1 });
    }
  };

  render() {
    const { liked, likes } = this.state;
    return (
      <div className="instagram">
        <div className="App-header">
          <img height="15px" src={require('./components/instagram.png')} />
          <div className="botaoPesquisar">
            {/* <svg src={require("./components/lupa.svg")}></svg> */}
            <p className="Pesquisar">Pesquisar</p>
          </div>
          <div className="icones">
            <img className="icone" src={require('./components/home.svg')} />
            <img className="icone" src={require('./components/direct.svg')} />
            <img className="icone" src={require('./components/bussola.svg')} />
            <img className="icone" src={require('./components/coracao.svg')} />
            <img className="foto" src={require('./components/foto.png')} />
          </div>
        </div>
        <img
          onClick={this.changeLikeColor}
          className="icone"
          width="30px"
          className="icone"
          src={require(liked
            ? './components/coracaoCheio.svg'
            : './components/coracao.svg')}
        />
        <div className="Post">
          <Post likes={likes} tempo="1 DIA" />
        </div>
      </div>
    );
  }
}
