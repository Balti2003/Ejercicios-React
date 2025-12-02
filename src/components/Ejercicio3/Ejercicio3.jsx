import { useState } from "react";

export default function Ejercicio3() {
    const [lista, setLista] = useState([]);
    const [texto, setTexto] = useState('');
 
    const agregarALista = () => {
        if (texto.trim() === "") return;
        setLista([...lista, texto]);
        setTexto('');
    }

    const eliminarItem = (index) => {
        const nuevaLista = [...lista];
        nuevaLista.splice(index, 1);
        setLista(nuevaLista);
    }
    
    return (
        <div>
            <h2>Ejercicio 3 - lista dinamica</h2>

            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>

            <button onClick={agregarALista}>Agregar</button>

            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}{" "}<button onClick={() => eliminarItem(index)}>Eliminar</button></li>
                ))}
            </ul>
        </div>
    ) 
}