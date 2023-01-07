import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"Elves",
      count: 0,
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.showName = this.showName.bind(this);
  }

  add() {
    let state = this.state;
    state.name="Memê";
    state.count += 1;
    
    this.setState(state);
  }

  remove() {
    let state = this.state;
    state.name="Julio";
    if(state.count === 0){
      alert("opa chegou a zero");
      return;
    }

    state.count -= 1;
    this.setState(state);
  }

  showName(){
    let state = this.state;
    
    this.setState(state);
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.name} Program</h2>
        <h3>
          
          <button onClick={this.remove}>-</button>
          {this.state.count}

          <button onClick={this.add}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;
