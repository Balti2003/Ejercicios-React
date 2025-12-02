export default function Ejercicio1() {
    
    const cambiarColor = () => {
        const colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = `#${colorAleatorio}`;
    }

    const volverABlanco = () => {
        document.body.style.backgroundColor = '#ffffff';
    }

    return (
        <div>
            <h2>Ejercicio 1 - cambiar fondo</h2>
            <button onClick={cambiarColor}>Cambiar color fondo</button>
            <button onClick={volverABlanco}>Volver a blanco</button>
        </div>
    )
}