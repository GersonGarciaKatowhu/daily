import { useTaskStore } from '../store/useTaskStore'
function Tasks() {
  const { tasks, deleteTask } = useTaskStore()
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.nameTask}
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          <button>Editar</button>
          <button>{task.completed ? 'Completado' : 'Pendiente'}</button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
