import { useState } from 'react'
import { useTaskStore } from '../store/useTaskStore'
import Modal from './Modal'
function Tasks() {
  const { tasks, deleteTask, toggleTask } = useTaskStore()
  const [isEditing, setIsEditing] = useState(false)
  const [editTask, setEditTask] = useState({})
  function handleEdit(task) {
    console.log('Editando...')
    console.log(task)
    setIsEditing(true)
    setEditTask(task)
  }
  return (
    <div>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.nameTask}
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          <button onClick={() => handleEdit(task)}>Editar</button>
          <button onClick={() => toggleTask(task.id)}>{task.completed ? 'Completado' : 'Pendiente'}</button>
        </li>
      ))}
    </ul>
      <div>{isEditing && (<Modal editTask={editTask} setIsEditing={setIsEditing}/>)}</div>
      </div>
  )
}

export default Tasks
