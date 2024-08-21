import Tasks from "./components/Tasks"
import Form from "./components/Form"
import ProgressBar from "./components/ProgressBar"
function Appcrud() {
  return (
    <div className="Appcrud">
      <ProgressBar />
      <Tasks />
      <Form />
    </div>
  )
}

export default Appcrud
