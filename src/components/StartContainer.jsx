import React, { useEffect, useState } from 'react'
import { Button, Page, Text } from '@geist-ui/core'
import regeneratorRuntime from 'regenerator-runtime'

const Startcontainer = () => {
  const textAnimation = {
    white: {
      develop: 'text-white'
    },
    color: {
      develop: 'text-transparent'
    }
  }

  const [colorDevelop, setColorDevelop] = useState('white')
  const [colorPreview, setColorPreview] = useState('white')
  const [colorShip, setColorShip] = useState('white')

  useEffect(() => {
    initColors()
  }, [])

  const initColors = async () => {
    while (true) {
      await sleep(1000)
      setColorDevelop(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorDevelop(prevCount => prevCount === 'white' ? 'color' : 'white')
      setColorPreview(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorPreview(prevCount => prevCount === 'white' ? 'color' : 'white')
      setColorShip(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorShip(prevCount => prevCount === 'white' ? 'color' : 'white')
    }
  }

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
        <div className="p-20 text-center">
            <div className={textAnimation[colorDevelop].develop + ' text-[12rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]'}>
                Develop.
            </div>
            <div className={textAnimation[colorPreview].develop + ' text-[12rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]'}>
                Preview.
            </div>
            <div className={textAnimation[colorShip].develop + ' text-[12rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]'}>
                Ship.
            </div>
            <div className="text-center p-6 flex justify-center">
            <Button onClick={() => initColors() } type="secondary" auto scale={1.8} className="p-4">Start Deploying</Button>
            <div className="w-[2%]"></div>
            <button type="button" class="text-slate-300 text-xl p-4 border border-slate-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg hover:text-white hover:border-white px-[44px] py-[14px] mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Get a Demo</button>
            </div>
            <div className="text-slate-400 text-2xl text-center p-12">Vercel combines the best developer experience with an obsessive focus on end-user<br></br> performance.<br></br>
            Our platform enables frontend teams to do their best work.</div>
            <div className="text-xl text-white text-center p-10">EXPLORE THE VERCEL WAY</div>
        </div>
  )
}

export default Startcontainer
