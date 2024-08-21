import { useState } from "react"
import { useTaskStore } from "../store/useTaskStore"
import Error from "./Error"
import Add from "../../components/icons/Add"
import './Form.css'
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
    <div>
      {error && <div>{<Error error={error}/>}</div>}
    <form onSubmit={handleSubmit}>
      <input type="text" value={nameTask} onChange={(event) => setNameTask(event.target.value)}/>
      <button><Add /></button>
    </form>
    </div>
  )
}

export default Form
