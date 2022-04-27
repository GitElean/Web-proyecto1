import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import Startcontainer from './StartContainer'
import React from 'react'

const App = () => {
  return (
       <>
       <Header />
       <div className="bg-black w-full h-screen">
         <Startcontainer />
       </div>
       <Footer />
       </>
  )
}

export default App
