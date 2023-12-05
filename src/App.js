import './App.css';
import HelloWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Valéria"/>
      <SayMyName nome="Floki"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Valdi"
        idade="31"
        profissao="Analista de Sistemas"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
