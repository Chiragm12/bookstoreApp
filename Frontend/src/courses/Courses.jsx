import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from '../../public/list.json'

function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        {/* Pass the list of courses to the Course component */}
        <Course courses={list} />
      </div>
      <Footer />
    </>
  )
}

export default Courses
