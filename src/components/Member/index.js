import React, { Component } from "react";

class Member extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        }
    this.singIn = this.singIn.bind(this);

    }

    singIn(){
       this.setState({nome: "elves"});
    }


  render() {
    return (<div>
        <h2>Bem vindo(a) {this.state.nome}</h2>
        <button onClick={this.singIn}>
            Entrar como elves
        </button>

        <button onClick={()=>this.setState({nome:""})}>
            sair
        </button>

        </div>
        );
  }
}

export default Member;
