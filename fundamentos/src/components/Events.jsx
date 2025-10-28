const Events = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        console.log("Clicou no botão!", e);
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
        </div>
    );
}

export default Events;