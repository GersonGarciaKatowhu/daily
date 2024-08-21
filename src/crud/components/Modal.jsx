/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import Error from "./Error";

function Modal({ editTask, setIsEditing }) {
  const [taskName, setTaskName] = useState(editTask.nameTask || '');
  const [error, setError] = useState('')
  const { editTask: edit } = useTaskStore();
  function handleSave() {
    // Implementa la lógica para guardar la tarea editada
    if(!taskName) setError('El campo no debe estar vacío')
    edit(editTask.id, taskName)
    console.log('Guardando tarea:', taskName)
    setIsEditing(false) // Cierra el modal después de guardar
    setError('')
  }

  function handleCancel() {
    setIsEditing(false) // Cierra el modal sin guardar cambios
  }

  return (
    <div className="modal">
      {error && <p>{<Error error={error}/>}</p>}
      <h2>Editar Tarea</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleSave}>Guardar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
}

export default Modal;
