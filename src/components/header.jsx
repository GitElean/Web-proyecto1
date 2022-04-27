import '../styles/index.css'
import React from 'react'
import { Button, Page, Text } from '@geist-ui/core'

const Header = () => {
  return (<>
      <div className="fixed top-0 bg-black opacity-75 h-20 w-full" />
      <div className="fixed backdrop-blur-sm  top-0 border-b-2 border-white w-full flex h-20 items-center justify-center">
        <div className="text-2xl text-gray-400 hover:text-white transition-all duration-200">
          <ul>
            <li>Features</li>
            <li>Templates</li>
            <li>Integrations</li>
            <li>Customers</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
