import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <ToastContainer />
        <Outlet />
    </div>
  )
}

export default Layout