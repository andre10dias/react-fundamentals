import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maira"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 23 },
        { id: 2, name: "Pedro", age: 30 },
        { id: 3, name: "Josias", age: 25 },
        { id: 4, name: "Maira", age: 28 },
    ]);

    // Previous state é o valor anterior do estado
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5); //Número entre 0 e 4 arrendodando para baixo
        console.log(randomNumber);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <div>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name} - {user.age}</li>
                    ))
                }
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender