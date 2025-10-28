const Events = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        console.log("Clicou no botão!", e);
    }

    return (
        <div>
            <h1>Eventos em React</h1>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    );
}

export default Events;