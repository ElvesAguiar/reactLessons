import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        password: "",
        gender: "",
      },
    };

    this.formsData = this.formsData.bind(this);
  }

  formsData(event) {
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        nome:
        <input
          type="text"
          name="name"
          value={this.state.form.name}
          onChange={this.formsData}
        />
        <br />
        Email:
        <input
          type="email"
          name="email"
          value={this.state.form.email}
          onChange={this.formsData}
        />
        <br />
        Senha:
        <input
          type="text"
          name="password"
          value={this.state.form.password}
          onChange={this.formsData}
        />
        <br />
        Sexo:
        <select
          name="gender"
          value={this.state.form.gender}
          onChange={this.formsData}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.form.name}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.password}</h3>
          <h3>{this.state.form.gender}</h3>
        </div>
      </div>
    );
  }
}

export default App;
