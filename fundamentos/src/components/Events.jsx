const Events = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        console.log("Clicou no botão!", e);
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1>;
        } else {
            return <h1>Também poderia renderizar isso</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Eventos inline")}>Clique aqui tanbém</button>
            </div>
            <div>
                <button 
                    onClick={() => {
                        if (true) {
                            console.log("Isso não deveria existir =)");
                        }
                    }}
                >Clique aqui, por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;