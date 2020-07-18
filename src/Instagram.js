import React, { Component } from 'react';
import Curtidas from './components/Curtidas.js';
import Comentarios from './components/Comentarios.js';
import Time from './components/Time.js';
// import Sugestao from './components/Sugestao.js';
import './Instagram.css';

export default class Instagram extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      likes: 79,
      saved: false,
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

  changeSaveColor = () => {
    if (this.state.saved === true) {
      this.setState({ saved: false });
    } else {
      this.setState({ saved: true });
    }
  };

  render() {
    const { liked, likes, saved} = this.state;
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
            <img className="foto" src={require('./components/dono.jpg')} />
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
                  <p className="texto"  >sostenescavalcante</p>
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
                      onClick={this.changeSaveColor}
                      className="icone"
                      src={require(saved
                        ? './components/flagBlack.jpg'
                        : './components/flagWhite.jpg')}
                  />
                </div>
                <div className="Post">
                  <Curtidas likes={likes}/>
                </div>
                <div>
                  <Comentarios comentador="sostenescavalcante" comentario="O deputado Sóstenes continua com ótima evolução clínica. E vamos continuar orando para que em breve ele volte para casa. Juntos vamos vencer essa batalha.
Continuamos em oração!"/>
                  <Comentarios comentador="glaucobarrosgon" comentario="Deus no comando 👏👏🙏"/>
                  <Comentarios comentador="pr_sergiomarques" comentario="A paz. Estamos em oração e confiando no agir de Deus.🙏🏾🙏🏾🙏🏾"/>
                </div>
                <div>
                  <Time tempo="25 DE JUNHO"/>
                </div>
              </div>

            </div>
            <div className="novoComentario">
              <p className="addComent">Adicione um comentário...</p>
              <p className="publicar">Publicar</p>
            </div>
          </div>
          <div className="right">
            <div className="perfil">
              <img className="fotoPerfil" src={require('./components/dono.jpg')}/>
              <div className="dadosDono">
                <b>malco.freitas</b>
                <p className="descricaoDono">Malco Freitas</p>
              </div>             
            </div>
            <div className="sugestoesTitulo">
                <p className="sugestoesParaVoce">Sugestões para você</p>
                <p className="verTudo">Ver tudo</p>
            </div>
            {/* <div>
              <Sugestao nome="christianramos9"/>
              <Sugestao nome="flaviatavares_moreira"/>
              <Sugestao nome="levifarias1"/>
              <Sugestao nome="_lucaum"/>
              <Sugestao nome="mgadret_12"/>
            </div> */}
            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./components/christianramos9.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">christianramos9</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./components/flaviatavares_moreira.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">flaviatavares_moreira</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>      

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./components/levifarias1.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">levifarias1</p>
                  <p className="descricaoDono">Popular</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>  

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./components/_lucaum.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">_lucaum</p>
                  <p className="descricaoDono">Segue você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>

            <div className="linhaSugestao">
              <div className="fotoNome">
                <img className="fotoSugestao" src={require('./components/mgadret_12.jpg')} />
                <div className="identidade">
                  <p className="nomeSugestao">mgadret_12</p>
                  <p className="descricaoDono">Sugestões para você</p>
                </div>
              </div>
              <p className="seguir">Seguir</p>           
            </div>
            <p className="final">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags •  idioma</p>
            <p className="final">© 2020 INTAGRAM DO FACEBOOK</p>
          </div>
        </div>


      </div>
    );
  }
}
