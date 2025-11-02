// const CarDetails = (props) => {
//   return (
//     <div>
//         <h1>CarDetails</h1>
//         <h2>Detalhes do carro</h2>
//         <ul>
//             <li>Marca: {props.brand}</li>
//             <li>KM: {props.km}</li>
//             <li>Cor: {props.color}</li>
//         </ul>
//     </div>
//   )
// }

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>CarDetails</h1>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar ? <p>Este carro é novo!</p> : <p>Este carro é usado!</p>}
    </div>
  )
}

export default CarDetails