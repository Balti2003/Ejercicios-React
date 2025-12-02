import { useEffect, useState, useRef } from "react"

export default function Ejercicio6() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    
    const formatearTiempo = (totalSegundos) => {
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        const horaFormateada = String(horas).padStart(2, '0');
        const minutoFormateado = String(minutos).padStart(2, '0');
        const segundoFormateado = String(segundos).padStart(2, '0');

        return `${horaFormateada}:${minutoFormateado}:${segundoFormateado}`;
    }

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const iniciarTemporizador = () => {
        setIsRunning(true);
    }

    const pausarTemporizador = () => {
        setIsRunning(false);
    }

    const reiniciarTemporizador = () => {
        setIsRunning(false);
        setTime(0);
    }

    return (
        <div>
            <h2>Ejercicio 6 - temporizador</h2>

            <h5>Temporizador: {formatearTiempo(time)}</h5>
            <button onClick={iniciarTemporizador} disabled={isRunning}>Iniciar</button>
            <button onClick={pausarTemporizador} diasabled={!isRunning || time === 0}>Pausar</button>
            <button onClick={reiniciarTemporizador} disabled={time === 0}>Reiniciar</button>
        </div>
    ) 
}