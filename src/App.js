import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        password: "",
      },
      status: false
    };

    this.formsData = this.formsData.bind(this);
    this.logIn = this.logIn.bind(this);
  };

  formsData(event) {
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
    console.log('teste1');
  };

  logIn(event) {
    event.preventDefault();
    if ((this.state.form.name === 'vih0') && (this.state.form.password === 'felizAniversario')) {
      console.log('teste3');
      this.setState({ status: true });
    };
  };





  render() {
    return (
      <Container>
        {this.state.status ? (
          <div>
            <h1>
              Parabéns Vitória, agora mais velha, continue sendo essa pessoa que íncrivel que você é.
            </h1>
            <Img src="https://st.depositphotos.com/1068095/3276/i/950/depositphotos_32761307-stock-photo-cake.jpg"></Img>

          </div>)

          :

          (<div>
            <Form onSubmit={this.logIn}>
              <label>Nome: </label>
              <Input
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.formsData}
              />
              <br />
              <label>Senha: </label>
              <Input
                type="password"
                name="password"
                value={this.state.form.password}
                onChange={this.formsData}
              />
              <Button onClick="submit" >Entrar</Button>
            </Form>
            <Acess>
              <h3 >Login: vih0</h3>
              <h3 >senha: felizAniversario</h3>

            </Acess>
          </div>)}

      </Container> 

    );
  };
};




const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: auto;
  height: 100%; 
  margin: 0 auto;
  background: radial-gradient(#00e7bd, #013a4e);
`;
const Form = styled.form`
  width: 31.25rem;
  height: 6.25rem;
  padding: 10px 10px 10px 10px;
  background: linear-gradient(#00e7bd, #013a4e);
  margin: 30px auto auto auto;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    margin:5px;
  }
`;
const Input = styled.input`

  width: 24.6rem;
  height: 2.8rem;
  border-radius: 8px;
  background: #ffffff;
  color:# 000000;
  font-family: "Poppins", sans-serif;
  outline: none;
`;
const Button = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  background: #ffffff;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const Acess = styled.div`
 
 
  max-width: auto;
  height: 100%; 
  margin: 0 auto;
  
`;
const Img = styled.img`
heigh:400px;
width:450px;

`

const DivForm = styled.div`
display: flex;
`;

export default App;
