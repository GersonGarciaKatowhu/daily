import { useEffect, useState } from "react"

function AppTimer() {
  const [seconds, setSeconds] = useState(10)
  const [minutes, setMinutes] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
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
  }, [minutes, seconds])
  return (
    <div className="AppTimer">
      Timer
      <p>{minutes}:{seconds}</p>
      <button onClick={() => setSeconds(10)}>Reiniciar tiempo</button>
      <button onClick={() => clearInterval(interval)}>Pausa</button>
    </div>
  )
}

export default AppTimer
