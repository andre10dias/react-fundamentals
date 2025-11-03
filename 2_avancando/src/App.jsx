import { useState } from 'react'

import './App.css'

/**
 * Importa como se fosse um componente ou módulo;
 * O src é dinâmico, ou seja, o Webpack faz o build e gera
 * o caminho correto para a imagem na aplicação final.
 */
import City from './assets/city.jpg'
import ManagedData from './component/ManagedData'
import ListRender from './component/ListRender'
import ConditionalRender from './component/ConditionalRender'
import ShowUsername from './component/ShowUsername'
import CarDetails from './component/CarDetails'
import Fragment from './component/Fragment'
import Container from './component/Container'
import ExecuteFunction from './component/ExecuteFunction'

function App() {
  const name = "Joaquim";
  const [username] = useState("Maria");

  const cars = [
    {id: 1, brand: "Fiat", km: 10000, color: "Preto", newCar: false},
    {id: 2, brand: "Ford", km: 20000, color: "Azul", newCar: true},
    {id: 3, brand: "Chevrolet", km: 30000, color: "Vermelho", newCar: false},
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
    alert("Executando evento do componente pai pelo componente filho.");
  }

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
      <ConditionalRender />
      {/* Enviando dados do componente pai para o filho */}
      {/* props */}
      {/* <ShowUsername name="João" /> */}
      {/* <ShowUsername name={name} /> */}
      <ShowUsername name={username} />
      {/* destructuring */}
      <CarDetails brand="Fiat" km={10000} color="Preto" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={20000} color="Azul" newCar={true} />
      <CarDetails brand="Chevrolet" km={30000} color="Vermelho" newCar={false} />
      {/* array de objetos */}
      <h1>-- Lista de carros --</h1>
      {cars.map((car) => 
        <CarDetails 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar} />
      )}

      {/* Fragment */}
      <Fragment propFragment="Teste" />

      {/* Children */}
      <Container value="Testing">
        {/* Conteúdo do componente filho criado no componente pai */}
        <p>Este é o conteúdo do container</p>
      </Container>

      {/* Executando função do componente pai */}
      <ExecuteFunction myFunction={showMessage} />
    </>
  )
}

export default App
