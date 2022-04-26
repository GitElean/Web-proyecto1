import '../styles/index.css'
import React from 'react'
import Logo from './vercelLogo'
import { Button, Page, Text } from '@geist-ui/core'

const Header = () => {
  return (<>
      <div className="fixed top-0 bg-black opacity-75 h-20 w-full" />
      <div className="fixed backdrop-blur-sm  top-0 border-b-2 border-white w-full flex h-20 items-center justify-center">
      <Logo />
        <div className="text-[40px] text-gray-400 hover:text-white hover:text-2xl  transition-all duration-200">text</div>
      </div>
    </>
  )
}

export default Header
