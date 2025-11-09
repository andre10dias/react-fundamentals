import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    // gerenciamento de dados
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    console.log(name);
    console.log(email);

    return (
        <div>
            <form>
                {/* criando fomulário */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Digite o seu nome' 
                        onChange={handleNameChange} />
                </div>

                {/* label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" 
                        name="email" 
                        placeholder="Digite o seu email"
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm