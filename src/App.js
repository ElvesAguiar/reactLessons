import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      gender:'masculino'
      
    };
    this.emailChange = this.emailChange.bind(this)
  }
  emailChange(event){

    let input = event.target.value;
    this.setState({email: input});

  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Emai:
        <input type="email" name="email" value={this.state.email}
        
              onChange={this.emailChange} /><br/>
        Senha:
        <input type="password" name="senha" value={this.state.password}
        onChange={(event) => this.setState({password: event.target.value})}/>
          <br/>
          <br/>
        sexo:
        <select name="sexo" value = {this.state.gender} 
        onChange={(event) => this.setState({gender: event.target.value})}>
            <option>Masculino</option>
            <option>Femenino</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.password}</h3>
          <h3>{this.state.gender}</h3>
        </div>
      </div>
    );
  }
}

export default App;
