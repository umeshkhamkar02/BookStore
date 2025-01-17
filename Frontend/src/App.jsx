import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses.jsx'
import SignUp from './components/SignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  )
}

export default App
