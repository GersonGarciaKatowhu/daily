import './Tasks.css'
import { useState } from 'react'
import { useTaskStore } from '../store/useTaskStore'
import Modal from './Modal'
import Delete from '../../components/icons/Delete'
import Edit from '../../components/icons/Edit'
import Completed from '../../components/icons/Completed'
import Incomplete from '../../components/icons/Incomplete'
import Hand from '../../components/icons/Hand'
function Tasks() {
  const { tasks, deleteTask, toggleTask, deleteAll } = useTaskStore()
  const [isEditing, setIsEditing] = useState(false)
  const [editTask, setEditTask] = useState({})
  function handleEdit(task) {
    setIsEditing(true)
    setEditTask(task)
  }
  return (
    <div>
      <div>
        <button onClick={deleteAll}><Hand /></button>
      </div>
    <ul>
      {tasks.map((task) => (
        <li className='task' key={task.id}>
          <p className='task-name'>{task.nameTask}</p>
          <button onClick={() => deleteTask(task.id)}><Delete /></button>
          <button onClick={() => handleEdit(task)}><Edit /></button>
          <button onClick={() => toggleTask(task.id)}>{task.completed ? <Completed /> : <Incomplete />}</button>
        </li>
      ))}
    </ul>
      <div>{isEditing && (<Modal editTask={editTask} setIsEditing={setIsEditing}/>)}</div>
      </div>
  )
}

export default Tasks
