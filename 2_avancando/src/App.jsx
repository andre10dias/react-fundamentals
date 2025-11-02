import './App.css'

/**
 * Importa como se fosse um componente ou módulo;
 * O src é dinâmico, ou seja, o Webpack faz o build e gera
 * o caminho correto para a imagem na aplicação final.
 */
import City from './assets/city.jpg'
import ManagedData from './component/ManagedData'
import ListRender from './component/ListRender'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem na pasta public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem na pasta assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManagedData />
      <ListRender />
    </>
  )
}

export default App
