import '../styles/index.css'
import React from 'react'
import { Button, Page, Text } from '@geist-ui/core'

const Header = () => {
  return (<>
      <div className="fixed top-0 bg-black opacity-75 h-20 w-full" />
      <div className="fixed backdrop-blur-sm  top-0 border-b-2 border-white w-full flex h-20 items-center justify-center">
      <div className="w-8 h-8 fill-white">
          <svg viewBox="0 -17 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
              <polygon points="128 0 256 221.705007 0 221.705007"></polygon>
            </g>
          </svg>
        </div>
        <h3 className="text-white ml-3-">Vercel</h3>
        <div className="text-2xl text-gray-400 hover:text-white transition-all duration-200">
          <ul className="inline-flex space-x-4">
            <li className="list-part2">Features</li>
            <li className="list-part2">Templates</li>
            <li className="list-part2">Integrations</li>
            <li className="list-part2">Customers</li>
            <li className="list-part2">Pricing</li>
          </ul>
        </div>
        <div>
          <ul className="inline-flex p-1">
            <li className="list-part2 text-sm">Login</li>
            <li className="list-part2 text-sm">Contact</li>
          </ul>
        </div>
        <Button type="secondary" ghost auto scale={0.7}>Sign Up</Button>
      </div>
    </>
  )
}

export default Header
