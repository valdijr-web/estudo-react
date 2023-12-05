import './App.css';
import HelloWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <SayMyName nome="Valéria"/>
      <SayMyName nome="Floki"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Valdi"
        idade="31"
        profissao="Analista de Sistemas"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
