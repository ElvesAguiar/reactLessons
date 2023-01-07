
import React, {Component, component} from 'react';

/*
const Amigos = (props) => {
  return (<div>
    <Sobre nome={props.nome} cargo={props.cargo} 
    idade={props.idade} />
    <Caracteristicas caracteristica={props.caracteristica} />
    <hr></hr>
  </div>);
};

const Sobre = (props) => {
  return(
    <div>
      <h2>Nome: {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
};

const Caracteristicas = (props) => {
  return(
    <div>
      <a>caracteristica: {props.caracteristica}</a>
    </div>
  );
};

export default function App(){
  return(
    <div>
      <h1> conhecça meus amigos</h1>
      <Amigos nome= "Matias" cargo="Programador" idade="23" caracteristica="Calvo"/>
      <Amigos nome= "Vih0" cargo="Programadora" idade="21" caracteristica="Baixinha"/>
      <Amigos nome= "Karol" cargo="Programadora" idade="22" caracteristica="Preta"/>
    </div>
  );
};
*/

class Amigos extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Caracteristicas caracteristica = {this.props.caracteristica}/>
      </div>
    );
  };
};

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  };
};

class Caracteristicas extends Component{
  render(){
    return(
      <div>
        <a>Caracteristica = {this.props.caracteristica}</a>
      </div>
    );
  };
};


export default function App(){
  return(
    <div>
      <h1>Conheça meus amigos</h1>
      <Amigos nome= "Matias" cargo="Programador" idade="23" caracteristica="Calvo"/>
    </div>
  );
};