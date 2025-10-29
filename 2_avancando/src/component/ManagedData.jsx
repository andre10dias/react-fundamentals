import { useState } from "react"

const ManagedData = () => {
    let someData = 10;
    const [numero, setNumero] = useState(15);

    return (
        <div>
            <div>
                <p>Valor sem hooks: {someData}</p>
                <button onClick={() => someData = 15}>Mudar valor</button>
            </div>
            <div>
                <p>Valor com hooks: {numero}</p>
                <button onClick={() => setNumero(25)}>Mudar valor</button>
            </div>
        </div>
    )
}

export default ManagedData