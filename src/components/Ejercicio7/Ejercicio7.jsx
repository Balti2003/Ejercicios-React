import { useState } from "react";

export default function Ejercicio7() {
    const [numero, setNumero] = useState('');

    const handleNumChange = (e) => {
        setNumero(e.target.value);
    }

    const generarPassword = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-[]{}.?';
        let password = '';
        for (let i = 0; i < numero; i++) {
            if (numero < 4) {
                return 'La longitud debe ser 4 o mayor';
            }
            // eslint-disable-next-line react-hooks/purity
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            password += caracteres.charAt(randomIndex);
        }
        return password;
    }

    return (
        <div>
            <h2>Ejercicio 7 - Generador contraseñas aleatorias</h2>
            <p>Coloca la longitud de la contraseña y sola se generara una nueva</p>

            <input type="number" value={numero} onChange={handleNumChange} placeholder="longitud de contraseña" />

            <p>{generarPassword()}</p>
        </div>
    ) 
}