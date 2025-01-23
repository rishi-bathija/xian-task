import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className='min-h-screen w-screen'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
