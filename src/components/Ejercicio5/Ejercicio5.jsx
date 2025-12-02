import { useState } from "react";

export default function Ejercicio5() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');

    const [resultado, setResultado] = useState('');

    const handleNum1Change = (e) => {
        setNumero1(e.target.value);
    }

    const handleNum2Change = (e) => {
        setNumero2(e.target.value);
    }

    const realizarOperacion = (operador) => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if(isNaN(num1) || isNaN(num2)) return;

        let res;

        switch(operador) {
            case 'suma':
                res = num1 + num2;
                break;
            case 'resta':
                res = num1 - num2;
                break;
            case 'multiplicacion':
                res = num1 * num2;
                break;
            case 'division':
                if(num2 === 0) return;
                res = num1 / num2;
                break;
            default:
                res = "Operacion no valida";
        }

        setResultado(res.toFixed(2));
    }


    return (
        <div>
            <h2>Ejercicio 5 - Calculadora sencilla</h2>
            <input type="number" value={numero1} onChange={handleNum1Change} placeholder="Primer numero"/>
            <input type="number" value={numero2} onChange={handleNum2Change} placeholder="Segundo numero"/>
            <h5>Resultado: {resultado}</h5>
            <button onClick={() => realizarOperacion("suma")}>Sumar</button>
            <button onClick={() => realizarOperacion("resta")}>Restar</button>
            <button onClick={() => realizarOperacion("multiplicacion")}>Multiplicar</button>
            <button onClick={() => realizarOperacion("division")}>Dividir</button>
        </div>
    )
}