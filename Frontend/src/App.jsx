import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Courses from './Courses/Courses.jsx'
import SignUp from './components/SignUp.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'
function App() {
  const [count, setCount] = useState(0)
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser,"authUser");
  return (
    <>
    <div className='dark:bg-slate-90 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
      </div>
      </>
  )
}

export default App
