import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <h1>Forms</h1>
      <MyForm user={{ name: "John", email: "john@example.com" }} />
    </>
  )
}

export default App
