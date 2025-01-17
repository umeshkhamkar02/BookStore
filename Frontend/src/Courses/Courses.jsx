import React from 'react'
import Course from '../components/Course'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
        <Navbar />
        <div className='min-h-screen'>
        <Course />  
        </div>
        <Footer />
    </>
  )
}

export default Courses