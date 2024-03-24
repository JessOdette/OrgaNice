import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Tarea from "./Tarea"


export default function ToDo(){

    const [Tareas, setTareas] = useState([{id:123, nombre:'Practica 1', desc:'Lorem', priori:2, fecha:'00/00/0000'},
                                          {id:124, nombre:'Practica 2', desc:'Lorem', priori:3, fecha:'00/00/0000'}
    ]);

    
    const [nuevaTarea, setNuevaTarea] = useState({id:1, nombre: '', desc: '', priori: 0, fecha: '',})


    const handleNombre = (event) =>  setNuevaTarea({...nuevaTarea, nombre: event.target.value });
    const handleDesc = (event) =>  setNuevaTarea({...nuevaTarea, desc: event.target.value });
    const handlePriori = (event) =>  setNuevaTarea({...nuevaTarea, priori: event.target.value });
    const handleFecha = (event) =>  {
        const dateParts = event.target.value.split('-');
        setNuevaTarea({...nuevaTarea, fecha: `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` });
    }

    const [newId, setnewId] = useState(10);


    function sumbitTarea(event){
        event.preventDefault();

        console.log(newId);
        setNuevaTarea({...nuevaTarea, id:newId});
        setnewId(newId + 1);

        setTareas([...Tareas, nuevaTarea]);
        setNuevaTarea({id:0, nombre: '', desc: '', priori: 0, fecha: '' });
    }


    return(
        <>
            <div className="bg-mpurp opacity-75 w-3/4 text-2xl rounded-2xl p-3 text-twhite overflow-x-auto">
                <div className="flex justify-between">
                    <p>Tareas</p>
                    <Popup
                    trigger={<button className="hover:bg-dpurp hover:opacity-75 hover:text-twhite text-dpurp rounded-full w-10 h-10"> + </button>} 
                    modal>
                        <form onSubmit={sumbitTarea} className="bg-mpurp text-twhite p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
                            <p className="text-2xl mb-4">Crea tu Propia Tarea</p>
                            
                            <p>Como Quieres Llamar a la Tarea?</p>
                            <input className="mb-4 px-1 text-dpurp" placeholder="Tarea Matematicas" type="text" onChange={handleNombre} required />

                            <p>Cual es su Descripción?</p>
                            <textarea className="mb-4 px-1 text-dpurp resize-none" placeholder="Tarea Profe X..." type="text" onChange={handleDesc} required />

                            <p>Cual es su Prioridad?</p>
                            <input className="mb-4 px-1 text-dpurp w-14 text-center" placeholder="1" type="number" min="1" max="5" onChange={handlePriori} required />

                            <p>Cual es la Fecha de Entrega?</p>
                            <input className="mb-4 px-1 text-dpurp" type="date" onChange={handleFecha} required />
                            
                            <button type="submit" className="bg-bwhite text-dpurp py-2 px-4 rounded-md hover:bg-blue-600" >Submit</button>
                        </form> 
                    </Popup>
                </div>
                
                <div className="flex text-xl flex-auto">
                    <div className="w-1/5 pl-2">Tareas</div>
                    <div className="w-1/5 text-center">Info</div>
                    <div className="w-1/5 text-center">Prioridad</div>
                    <div className="w-1/5 text-center">Fecha</div>
                    <div className="w-1/5 text-center">Compleción</div>
                </div>

                <hr />

                <div className="overflow-y-auto h-48 pr-2">
                    {Tareas.map(tarea => ( <Tarea key={tarea.id} prop={tarea} /> ))}
                </div>
            </div>
        </>
    )
}

