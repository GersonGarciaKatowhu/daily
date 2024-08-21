import { useState } from "react"
import { useTaskStore } from "../store/useTaskStore"

function Form() {
  const [nameTask, setNameTask] = useState('')
  const { addTask } = useTaskStore()

  const handleSubmit = (event) => {
    event.preventDefault()
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
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nameTask} onChange={(event) => setNameTask(event.target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default Form
