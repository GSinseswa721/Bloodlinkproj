import React from 'react'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom'

const Main_page = () => {
  return (
    <>
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
    </>
  )
}

export default Main_page