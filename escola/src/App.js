import logo from './logo.svg';
import './App.css';
import escola from "./img/imaegmescola.jpg"
import Lista from "./componente/ListaAlunos.js"

export default function App() {

// CODIGO JAVASCRIPT COM A FUNÇÃO ANTES DO RETURN

const aluno ='Natan'
const curso ='ADS'
const alunos =['joão ','jose','maria']
const valor = 1 + 3

  return (
    <>
   <h1>Escola</h1>
   <img src={escola} className="App-logo" width="300px" height="200px" />
   <br></br>
   <p>Aluno:<b>{aluno}</b></p>
   <p>Curso:<b>{curso}</b></p>
   <p>Alunos:<b>{alunos}</b></p>
   <p>Valor:<b>{valor}</b></p>
   
   <button onClick="clique()">

   Botão

   </button>
    <select>
      <option value="valor1" >joão</option>
      <option selected value="valor2">joão</option>
      <option value="valor3" >maria</option>

<Lista alunos={alunos}/>

    </select>
    
    </>
  );
}

;
