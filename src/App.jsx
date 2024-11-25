import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './routes/About'
import Home from './routes/Home'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
