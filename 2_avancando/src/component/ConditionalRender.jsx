import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Pedro");
    return (
        <div>
            <h1>ConditionalRender</h1>
            <h3>Isso será exibido?</h3>
            {x && <p>Se 'X' for true, sim!</p>}
            {!x && <p>Agora 'X' é falso.</p>}

            <h3>IF Ternário</h3>
            {
                name === "João" ? (
                    <div>
                        <p>"O nome é João."</p>
                    </div>
                ) : (
                    <div>
                        <p>"Nome não encontrado."</p>
                    </div>
                )
            }
            <button onClick={() => setName("João")}>Mudar nome</button>
        </div>
    )
}

export default ConditionalRender