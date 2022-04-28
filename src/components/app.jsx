import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import Startcontainer from './StartContainer'
import React from 'react'
import Developcontainer from './DevelopContainer'

const App = () => {
  return (
       <>
       <Header />
       <div className="bg-black w-auto h-auto">
         <Startcontainer />
         <Developcontainer />
         <Footer />
       </div>
       </>
  )
}

export default App
