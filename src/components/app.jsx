import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import Startcontainer from './StartContainer'
import React from 'react'
import Developcontainer from './DevelopContainer'
import PreviewContainer from './PreviewContainer'
import Shipcontainer from './ShipContainer'
import Worldcontainer from './WorldContainer'
import Endcontainer from './EndContainer'
import Featurescontainer from './FeaturesContainer'
import Frameworkscontainers from './FrameworksContainers'

const App = () => {
  return (
       <>
       <Header />
       <div className="bg-black w-auto h-auto">
         <Startcontainer />
         <Developcontainer />
         <Featurescontainer/>
         <Frameworkscontainers />
         <PreviewContainer />
         <Shipcontainer />
         <Worldcontainer />
         <Endcontainer />
         <Footer />
       </div>
       </>
  )
}

export default App
