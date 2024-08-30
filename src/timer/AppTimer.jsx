import { useEffect, useState } from "react"
import "./AppTimer.css"
import CircularProgressBar from "./components/CircularProgressBar"

const typeOfPercentaje = {
  restLong : 15,
  restShort : 5,
  work : 35
}

function AppTimer() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [isRunning, setIsRunning] = useState(false)
  function handleRestart() {
    setMinutes(25)
    setSeconds(0)
    setIsRunning(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isRunning) return
      if(minutes === 0 && seconds === 0) {
        return clearInterval(interval)
      }
      if(seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1)
        setSeconds(59)
      }
      setSeconds((prevTime) => prevTime - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [minutes, seconds, isRunning])
  return (
    <div className="AppTimer">
      <h2 className="pomodoro-title">Pomodoro Timer</h2>
      <div className="timer">
        <p>{minutes}:{seconds}{seconds < 10 ? "0" : ""}</p>
        <button onClick={() => handleRestart()}>Reiniciar tiempo</button>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pausar" : "Iniciar"}</button>
        <div className="center">
        <CircularProgressBar percentage={50} />
        </div>
      </div>
    </div>
  )
}

export default AppTimer
