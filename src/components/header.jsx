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
        <h3 className="text-white ml-3- ">Vercel</h3>
        <div className="text-2xl text-gray-400 hover:text-white transition-all inline-flex duration-200">
            <div className="list-part2">Features</div>
            <div className="list-part2">Templates</div>
            <div className="list-part2">Integrations</div>
            <div className="list-part2">Customers</div>
            <div className="list-part2">Pricing</div>
        </div>
        <div className="inline-flex align-top pt-[-5px]">
            <div className="list-part2 text-sm">Login</div>
            <div className="list-part2 text-sm">Contact</div>
        </div>
        <Button type="secondary" auto scale={0.7}>Sign Up</Button>
      </div>
    </>
  )
}

export default Header
