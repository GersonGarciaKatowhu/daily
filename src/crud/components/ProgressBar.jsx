import { useTaskStore } from '../store/useTaskStore';
import './ProgressBar.css'
const ProgressBar = () => {
  const tasks = useTaskStore((state) => state.tasks)
  let completed = 0
  let total = 0
  tasks.forEach((task) => {
    if (task.completed) {
      completed++;
    }
    total++;
  });
  // Asegúrate de que total no sea 0 para evitar divisiones por cero
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      >
        <span className="progress-text">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;