import { useState } from "react";

export default function Ejercicio2() {
    const [contador, setContador] = useState(0);

    const handleContador = () => {
        setContador(contador + 1);
    }

    const resetContador = () => {
        setContador(0);
    }
    
    return (
        <div>
            <h2>Ejercicio 2 - contador clicks</h2>
            <h3>Contador: {contador}</h3>
            <button onClick={handleContador}>Sumar</button>
            <button onClick={resetContador}>Resetear</button>
        </div>
    ) 
}