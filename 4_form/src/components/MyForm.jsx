import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        <form>
            {/* criando fomulário */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder='Digite o seu nome' />
            </div>

            {/* label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite o seu email" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm