/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'react-todo-list-ejercicio9';

export default function Ejercicio9() {

    const [tareas, setTareas] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        const storedTareas = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTareas) {
            try {
                setTareas(JSON.parse(storedTareas));
            } catch (error) {
                console.error('Error al cargar las tareas desde el almacenamiento local:', error);
                setTareas([]);
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tareas));
    }, [tareas])

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const agregarTarea = () => {
        if (text.trim() === '') return;
        
        const nuevaTarea = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTareas([...tareas, nuevaTarea]);
        setText('');
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
    };
    
    const marcarCompletada = (id) => {
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completed: !tarea.completed
                };
            }
            return tarea;
        })
        setTareas(nuevasTareas);
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            agregarTarea();
        }
    } 
    
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: '#333' }}>
                Ejercicio 9 - Lista de Tareas
            </h2>

            {/* Input y Botón de Agregar */}
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={text} 
                    onChange={handleTextChange} 
                    onKeyPress={handleKeyPress}
                    placeholder="Nueva tarea..."
                    style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px 0 0 4px' }}
                />
                <button 
                    onClick={agregarTarea}
                    style={{ 
                        padding: '10px 15px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '0 4px 4px 0', 
                        cursor: 'pointer' 
                    }}
                >
                    Agregar
                </button>
            </div>

            {/* Lista de Tareas */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tareas.map((tarea) => (
                    <li 
                        key={tarea.id} 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            padding: '10px', 
                            borderBottom: '1px solid #eee',
                            backgroundColor: tarea.completed ? '#e0f7fa' : 'white',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        {/* Texto de la Tarea */}
                        <span 
                            style={{ 
                                flexGrow: 1, 
                                textDecoration: tarea.completed ? 'line-through' : 'none', 
                                color: tarea.completed ? '#888' : '#333' 
                            }}
                        >
                            {tarea.text}
                        </span>
                        
                        {/* Botones de Acción */}
                        <div style={{ marginLeft: '10px' }}>
                            <button 
                                onClick={() => marcarCompletada(tarea.id)}
                                style={{ 
                                    padding: '5px 10px', 
                                    backgroundColor: tarea.completed ? '#ff9800' : '#2196F3',
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '4px', 
                                    marginRight: '5px', 
                                    cursor: 'pointer' 
                                }}
                            >
                                {tarea.completed ? 'Pendiente' : 'Completar'}
                            </button>
                            <button 
                                onClick={() => eliminarTarea(tarea.id)}
                                style={{ 
                                    padding: '5px 10px', 
                                    backgroundColor: '#f44336', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '4px', 
                                    cursor: 'pointer' 
                                }}
                            >
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            
            {tareas.length === 0 && (
                <p style={{ textAlign: 'center', color: '#666', marginTop: '30px' }}>
                    ¡No tienes tareas pendientes! Agrega una nueva.
                </p>
            )}
        </div>
    )
}