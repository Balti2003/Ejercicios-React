/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";

export default function Ejercicio4() {
    const [texto, setTexto] = useState('');
    const [resultado, setResultado] = useState([]);

    const listaAnimales = ["Perro", "Gato", "Pez", "Tigre", "Leon", "Elefante", "Perro2", "Jirafa"];

    useEffect(() => {
        const filtro = listaAnimales.filter((animal) => animal.toLowerCase().includes(texto.toLowerCase()));

        setResultado(filtro);
    }, [texto]);

    return (
        <div>
            <h2>Ejercicio 4 - Filtro de busqueda en tiempo real</h2>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar..." />
            <ul>
                {resultado.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        </div>
    )
}