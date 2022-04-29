import React from 'react'
import Auth0 from './svg/auth0'
import Hashicorp from './svg/hashicorp'
import Mcdonalds from './svg/mcdonalds'
import Meta from './svg/meta'
import TripadvisorHorizontal from './svg/tripadvisor-horizontal'
import Uber from './svg/uber'
import Washingtonpost from './svg/washingtonpost'

const Endcontainer = () => {
  return (
        <div>
            <div className="font-bold text-white text-xl text-center py-32 tracking-widest">TRUSTED BY THE BEST FRONTEND TEAMS</div>
            <div className="content-center">
            <div className=" mx-auto w-4/5">
                <div className="inline-flex grid-cols-7">
                    <div className="fill-white h-16 w-32 px-8 py-4">
                        <Hashicorp />
                    </div>
                    <div className="fill-white h-10 w-10 px-8 py-4">
                        <Mcdonalds />
                    </div>
                    <div className="fill-white h-24 w-28 px-8 py-4">
                        <Meta />
                    </div>
                    <div className="fill-white h-28 w-36 px-8 py-4">
                        <Washingtonpost />
                    </div>
                    <div className="fill-white h-20 w-24 px-8 py-4">
                        <Auth0 />
                    </div>
                    <div className="fill-white h-10 w-16 px-8 py-4">
                        <Uber />
                    </div>
                    <div className="fill-white h-32 w-48 px-8 py-4">
                        <TripadvisorHorizontal />
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Endcontainer
