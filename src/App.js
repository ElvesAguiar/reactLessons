import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name:'',
     email:'',
     password:'',
     error:''
      
    };
    this.register = this.register.bind(this);
  }

  register(event){
    const {name, email, password} = this.state;
    if(name !== '' && email !== '' && password !== ''){
    alert(`Nome: ${name} \nEmail: ${email} \nSenha:${password} `);
  }else{
    this.setState({error: 'Ops! parece que está faltando algo'})
  }
 
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Novo usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.register}>
          <label>Nome:</label>
          <input type= "text" value={this.state.name} 
          onChange={(event) =>this.setState({name: event.target.value})}/><br/>
          <label>Email:</label>
          <input type="email" value={this.state.email}
          onChange={(event)=>this.setState({email: event.target.value})}/><br/>
          <label>Senha:</label>
           <input type="password" value={this.state.password}
          onChange={(event)=>this.setState({password: event.target.value})}/><br/>
          <button type="submit">Cadastrar</button>
          
        </form>
        
      </div>
    );
  }
}

export default App;
