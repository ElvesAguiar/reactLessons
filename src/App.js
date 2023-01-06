

const Bemvindo = (props) => {
 return(
  <div>
    
    <h2>Welcome {props.nome}</h2>
    <h3>I am {props.idade} years old</h3>
  
  </div>
 
 );
}


export default function App(){
  return(
    <div>
      <h1>hello world</h1>
      <br>
      </br>
      <Bemvindo nome="Elves" idade="24"/>
      <Bemvindo nome = "Vih0" idade="23"/>
      <Bemvindo nome = "Matias" idade="21"/>
      
      <br>
      </br>
      
      <h2>@deus</h2>
    </div>
  );
};