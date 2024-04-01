
import { useState } from "react";


const addTaskForm = ({ onAdd }) => {
    const [tarea, setTarea] = useState("");

    const addTarea = (event) => {
        event.preventDefault();             
        onAdd (tarea.trim())
        setTarea("")
    }


    return (
        <>
            <form onSubmit={addTarea}>
                <input type='text' value={tarea} placeholder='Agregar nueva tarea' 
                onChange={event => {
                    setTarea(event.target.value)
                }}>
                </input>
                <button type="submit" >Add</button>
            </form>
        </>
    )
}
export default addTaskForm