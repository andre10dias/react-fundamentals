import './App.css'
import MyComponent from './component/MyComponent'

function App() {
  return (
    <>
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este é um parágrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{color: 'white', padding: '25px', borderTop: '2px solid red'}}>
        Elemento estilizado de forma inline
      </p>
    </>
  )
}

export default App
