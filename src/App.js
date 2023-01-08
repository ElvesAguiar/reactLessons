import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logOut(){
    this.setState({status:false});
  }

  logIn(){
    this.setState({status:true})
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h2> welcome</h2>
            <button onClick={this.logOut} >logOut</button>
          </div>
        ) : (
          <div>
            <h2>ola visitante, faça login!</h2>
            <button onClick={this.logIn}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default Member;
