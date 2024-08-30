import { useEffect, useState } from "react"
import "./AppTimer.css"
import CircularProgressBar from "./components/CircularProgressBar"


function AppTimer() {
  const [timeDefault, setTimeDefault] = useState({
    minutes: 25,
    seconds: 0
  })
  const [seconds, setSeconds] = useState(timeDefault.seconds)
  const [minutes, setMinutes] = useState(timeDefault.minutes)
  const [percentage, setPercentage] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  function handleWork() { 
    setTimeDefault({
      minutes: 25,
      seconds: 0
    })
    setMinutes(25)
    setSeconds(0)
    setIsRunning(true)
  }

  function handleRestLong() {
    setTimeDefault({
      minutes: 15,
      seconds: 0
    })
    setMinutes(15)
    setSeconds(0)
    setIsRunning(true)
  }
  function handleRestShort() {
    setTimeDefault({
      minutes: 5,
      seconds: 0
    })
    setMinutes(5)
    setSeconds(0)
    setIsRunning(true)
  }
  function handleRestart() {
    setMinutes(timeDefault.minutes)
    setSeconds(timeDefault.seconds)
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
      } else {
        setSeconds((prevTime) => prevTime - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [minutes, seconds, isRunning])
  useEffect(() => {
    function calculatePercentage() {
      const percentage = ((minutes * 60) + seconds) / ((timeDefault.minutes * 60) + timeDefault.seconds) * 100
      const roundedPercentage = Math.round(percentage)
      setPercentage(roundedPercentage)
    }
    calculatePercentage()
  }, [minutes, seconds, timeDefault.minutes, timeDefault.seconds])
  return (
    <div className="AppTimer">
      <div className="timer">
        <nav>
        <button onClick={() => handleWork()}>Pomodoro</button>
        <button onClick={() => handleRestLong()}>Descanso Largo</button>
        <button onClick={() => handleRestShort()}>Descanso Corto</button>
        </nav>
        <button onClick={() => handleRestart()}>Reiniciar tiempo</button>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pausar" : "Iniciar"}</button>
        <div className="center">
        <CircularProgressBar percentage={percentage} time={ {minutes, seconds}} />
        </div>
      </div>
    </div>
  )
}

export default AppTimer
