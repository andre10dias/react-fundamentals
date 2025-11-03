const Container = ({children, value}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        {<p>O valor da prop value é: {value}</p>}
    </div>
  )
}

export default Container