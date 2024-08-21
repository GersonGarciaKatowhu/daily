import { useState } from "react"
import { useTaskStore } from "../store/useTaskStore"
import Error from "./Error"

function Form() {
  const [nameTask, setNameTask] = useState('')
  const [error, setError] = useState('')
  const { addTask } = useTaskStore()

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!nameTask) {
      return setError('El campo no debe estar vacío')
    }
    const id = crypto.randomUUID()
    console.log({
      id,
      nameTask,
      completed: false
    });
    
    addTask({
      id,
      nameTask,
      completed: false
    })
    setNameTask('')
    setError('')
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{<Error error={error}/>}</div>}
      <input type="text" value={nameTask} onChange={(event) => setNameTask(event.target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default Form
