import React from 'react'
import { Button, Page, Text, Tag, Select, Code} from '@geist-ui/core'

const Featurescontainer = () => {
  return (
        <div className="w-4/5 p-6 content-end text-right">
            <div className="flex-col">
                <div className="pb-10">
                    <div className="text-[2rem] text-white font-bold">Fast Refresh</div>
                    <div className="text-xl text-slate-400">Reliable live-editing experience for your UI<br></br> components.</div>
                </div>
                <div className="pb-10">
                    <div className="text-[2rem] text-white font-bold">Flexible Data Fetching</div>
                    <div className="text-xl text-slate-400">Connect your pages to any data source, headless<br></br> CMS, or API and make it work in everyone’s dev<br></br> environment.</div>
                </div>
                <div className="pb-10">
                    <div className="text-[2rem] text-white font-bold">Edge on Localhost</div>
                    <div className="text-xl text-slate-400">From caching to Serverless Functions, all our<br></br> cloud primitives work perfectly on localhost.</div>
                </div>
            </div>
        </div>
  )
}

export default Featurescontainer
