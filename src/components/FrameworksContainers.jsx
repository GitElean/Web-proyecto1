import React from 'react'
import Angularsvg from './svg/Angularsvg'
import Gatsbysvg from './svg/Gatsbysvg'
import Hugosvg from './svg/Hugosvg'
import Nextsvg from './svg/nextsvg'
import Nuxtsvg from './svg/Nuxtsvg'
import Reactsvg from './svg/Reactsvg'
import Sveltesvg from './svg/Sveltesvg'
import Vuesvg from './svg/Vuesvg'

const Frameworkscontainers = () => {
  return (
        <div>
            <div className="font-bold text-white text-xl text-center pt-32 pb-10 tracking-widest">WORKS WITH 30+ FRAMEWORKS</div>
            <div className=" mx-auto w-4/5 text-center">
            <div className="inline-flex grid-cols-7">
                <div className="fill-white h-10 w-10 px-8 py-4">
                    <Nextsvg />
                </div>
                <div className="h-10 w-10 px-8 py-4">
                    <Reactsvg />
                </div>
                <div className="fill-white h-10 w-10 px-8 py-4">
                    <Nuxtsvg />
                </div>
                <div className=" h-10 w-10 px-8 py-4">
                    <Vuesvg />
                </div>
                <div className="fill-white h-10 w-10 px-8 py-4">
                    <Sveltesvg/>
                </div>
                <div className=" h-10 w-10 px-8 py-4">
                    <Angularsvg />
                </div>
                <div className="fill-white h-10 w-10 px-8 py-4">
                    <Hugosvg />
                </div>
                <div className="h-10 w-10 px-8 py-4">
                    <Gatsbysvg />
                </div>
            </div>
            </div>
        </div>
  )
}

export default Frameworkscontainers
