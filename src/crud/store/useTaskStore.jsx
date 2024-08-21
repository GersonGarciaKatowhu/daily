import { create } from "zustand";
import InitialTask from "../mocks/tasks"
export const useTaskStore = create(set => ({
  tasks: InitialTask,
  addTask: task => set(state => (
    {
      tasks: [
        ...state.tasks,
        task
      ]
    }
  )),
  deleteTask: id => set(state => (
    {
      tasks: state.tasks.filter(task => task.id !== id)
    }
  )),
  toggleTask: id => set(state =>({
      tasks: state.tasks.map(task => {
        if(task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })})
  ),
  editTask: (id, nameTask) => set(state => ({
    tasks: state.tasks.map(task => {
      if(task.id === id) {
        return {
          nameTask,
          id
        }
      }
      return task
    })
  }))
}))