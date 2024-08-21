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
}))