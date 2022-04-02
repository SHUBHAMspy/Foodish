import React from 'react'
import Footer from './common/footer'
import Navbar from './common/navbar'


const Layout = ({children}) => {
  return (
    <div className='container' >
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout