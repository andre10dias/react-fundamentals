import { useState } from 'react';
import './App.css'
import MyComponent from './component/MyComponent'

function App() {
  let [n, setN] = useState(15);
  let [name, setName] = useState('Maria');

  function changeStyle() {
    n > 10 ? setN(5) : setN(15);
    name === 'João' ? setName('Maria') : setName('João');
  }

  return (
    <>
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este é um parágrafo do App.js</p>
      {/* css inline */}
      <p style={{color: 'white', padding: '25px', borderTop: '2px solid red'}}>
        Elemento estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink', backgroundColor: 'black'}}>
        CSS dinâmico de forma inline
      </h2>
      <h2 
        style={name == 'Maria' ? {color: 'green', backgroundColor: '#000'} : null}>
          Teste nome
      </h2>
      <button onClick={changeStyle}>Change style</button>
    </>
  )
}

export default App
