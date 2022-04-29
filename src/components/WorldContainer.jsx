import React from 'react'
import World from '../assets/world.gif'
import { Button, Page, Text, Tag, Select, Divider} from '@geist-ui/core'

const Worldcontainer = () => {
  return (
        <div>
          <img src={World} alt="loading..." width="100%" height="50%"/>
          <div className="w-full bg-slate-700 h-1/6  mx-auto text-center border-slate-600 border-2 flex-row">
            <div className="inline-flex grid-cols-3 divide-x">
            <div className="px-32 py-10 ">
              <div className="text-[4rem] text-white">90</div>
              <div className="text-xl text-slate-400">CITIES</div>
            </div>
            <div className="h-2/3 border-slate-200 w-1"></div>
            <div className="px-32 py-10">
              <div className="text-[4rem] text-white">24b+</div>
              <div className="text-xl text-slate-400">REQUEST PER WEEK</div>
            </div>
            <div className="px-32 py-10">
              <div className="text-[4rem] text-white">10PB</div>
              <div className="text-xl text-slate-400">DATA SERVER</div>
            </div>
            <div className="px-32 py-10">
              <div className="text-[4rem] text-white">99.99%</div>
              <div className="text-xl text-slate-400">GUARANTEED UPTIME</div>
            </div>
            </div>
          </div>

        </div>
  )
}

export default Worldcontainer
