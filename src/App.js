import './App.css';
import HelloWorld from './components/HellowWorld';

function App() {

  const name = 'Valdi';
  const newName = name.toLocaleUpperCase();

  function sum(a, b){
    return a+b;
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {2+2}</p>
      <p>Soma com função: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
