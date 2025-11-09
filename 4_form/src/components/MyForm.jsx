import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // gerenciamento de dados
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário...");
        console.log('Nome: ' + name, '\nEmail: ' + email, 
            '\nMensagem: ' + message, '\nFunção: ' + role);
        // limpar formulário
        setName('');
        setEmail('');
        setMessage('');
        setRole('');
    }

    // controle de formulário
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [message, setMessage] = useState(user ? user.message : '');
    const [role, setRole] = useState(user ? user.role : '');

    return (
        <div>
            {/* envio de formulário */}
            <form onSubmit={handleSubmit}>
                {/* criando fomulário */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Digite o seu nome' 
                        onChange={handleNameChange}
                        value={name} />
                </div>

                {/* label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* simplificação de manipulação de estado (state) */}
                    <input type="email" 
                        name="email" 
                        placeholder="Digite o seu email"
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                </label>

                <label>
                    <span>Mensagem:</span>
                    <textarea 
                        name="message" 
                        placeholder='Digite a sua mensagem'
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                     >
                    </textarea>
                </label>
        
                <label>
                    <span>Função</span>
                    <select 
                        name="role" 
                        onChange={(e) => setRole(e.target.value)}
                        value={role}>
                        <option value=""></option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm