import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import React from 'react'

const App = () => {
  return (
       <>
       <Header />
       <div className="bg-blue-500 w-full h-3/5"><h1>texto aqui</h1></div>
       <div className="bg-slate-700 w-full h-screen"></div>
       <Footer />
       </>
  )
}

export default App
