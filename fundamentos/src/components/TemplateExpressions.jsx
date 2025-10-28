const TemplateExpressions = () => {
    const name = "Alice";
    const age = 30;
    const message = `Olá, meu nome é ${name} e tenho ${age} anos.`;
    const data = {
        city: "São Paulo",
        country: "Brasil"
    };

    return (
        <>
            <h1>{message}</h1>
            <p>Eu moro em {data.city}, {data.country}.</p>
            <p>{console.log("Executando javascript no template jsx")}</p>
            <p>{2 + 2}</p>
        </>
    );
}

export default TemplateExpressions;