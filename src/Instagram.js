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
          <img height="29px" src={require('./components/instagram.png')} />
          <div className="botaoPesquisar">
            <img height="10px" src={require('./components/lupa.png')} />
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

        <div className="body">
          <div className="left">
            <div className="stories">
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./components/amigo1.jpg')}
                />
                <p className="nome">rodrigo</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./components/amigo2.jpg')}
                />
                <p className="nome">hudson</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./components/amigo3.jpg')}
                />
                <p className="nome">nique</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./components/amigo4.jpg')}
                />
                <p className="nome">jesse.m</p>
              </div>
              <div className="friend">
                <img
                  className="amigo"
                  src={require('./components/amigo5.jpg')}
                />
                <p className="nome">gouveia.h</p>
              </div>
            </div>
            <div className="publicacao">
              <div className="cabecalho">
                <div className="identificacao">
                  <img
                    className="postador"
                    src={require('./components/amigo6.jpg')}
                  />
                  <p className="nome">sostenescavalcante</p>
                </div>
                <img
                  className="mais"
                  width="16px"
                  src={require('./components/mais.svg')}
                />
              </div>
              <img
                className="imagemPost"
                src={require('./components/imagemPost.JPG')}
              />
              <div className="rodape">
                <div className="interacoes">
                  <div className="acoes">
                    <img
                      onClick={this.changeLikeColor}
                      className="icone"
                      src={require(liked
                        ? './components/coracaoCheio.svg'
                        : './components/coracao.svg')}
                    />
                    <img
                      className="icone"
                      src={require('./components/comente.svg')}
                    />
                    <img
                      className="icone"
                      src={require('./components/direct.svg')}
                    />
                  </div>
                  <img
                    className="botaoInterativo"
                    src={require('./components/flagWhite.jpg')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="perfil"></div>
          </div>
        </div>

        <div className="Post">
          <Post likes={likes} tempo="1 DIA" />
        </div>
      </div>
    );
  }
}
