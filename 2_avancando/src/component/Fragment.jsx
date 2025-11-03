const Fragment = ({propFragment}) => {
  return (
    // Tag vazia - Pode ser usado para evitar criar uma div desnecessária
    <>
        <h1>Fragment</h1>
        <h2>Segundo título</h2>
        <h4>{propFragment}</h4>
    </>
  )
}


export default Fragment