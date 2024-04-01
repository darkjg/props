


function task({ task, deleteTask, marcarTask }) {
const click=()=>{
    marcarTask(task.id)
}

    return (
        <>

            <li key={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} onClick={click}>{task.text}</li>
            <button onClick={() => {
                deleteTask(task.id)
            }}>Eliminar</button>


        </>
    )

}
export default task
