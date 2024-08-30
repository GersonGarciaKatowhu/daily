import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Appcrud from './crud/Appcrud'

import AppTimer from './timer/AppTimer'
function App() {

  return (
    <div className="App">
    <Header />
    <Appcrud />
    <Footer />
    <AppTimer />
    </div>
  )
}

export default App
