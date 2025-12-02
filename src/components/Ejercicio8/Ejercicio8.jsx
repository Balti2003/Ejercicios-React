import { useState } from 'react';

export default function Ejercicio8() {

    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);

        // CONTEO DE CARACTERES
        // Eliminamos todos los espacios en blanco, saltos de línea y tabulaciones con la exp regular
        const cleanTextForChars = newText.replace(/\s/g, '');
        setCharCount(cleanTextForChars.length);

        // CONTEO DE PALABRAS
        if (newText.trim() === '') {
            setWordCount(0);
            return;
        } 

        // Dividir el texto por uno o más espacios en blanco
        // .trim() elimina espacios al inicio/final
        const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    };

    return (
        <div>
            <h2>Ejercicio 8 - Contador de palabras y caracteres</h2>
            
            <textarea
                style={{ width: '100%', height: '150px'}}
                placeholder="Escribe tu párrafo aquí..."
                value={text}
                onChange={handleTextChange}
            />

            <div>
                <p><strong>Caracteres (sin espacios):</strong> {charCount}</p>
                <p><strong>Palabras:</strong> {wordCount}</p>
            </div>
            
            <div>
                <p>Nota: El conteo de palabras se basa en la separación por espacios.</p>
            </div>
        </div>
    );
};
