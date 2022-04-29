import '../styles/index.css'
import React from 'react'
import { Button, Page, Text, Tag, Select, useTheme} from '@geist-ui/core'
import { Github, Twitter } from '@geist-ui/icons'

const Footer = () => {
  return (
    <><div className="bg-slate-700 border-slate-40">
      <footer className=" bg-slate-700 border-y 0 py-4 px-2 flex-col w-70% mx-auto">
        <nav className="flex">
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Frameworks</h3>
                <div className="list-part">Next.js</div>
                <div className="list-part">Create React App</div>
                <div className="list-part">Svelte</div>
                <div className="list-part">Nuxt</div>
                <div className="list-part">Gatsby</div>
                <div className="list-part">Vue</div>
                <div className="list-part">Angular</div>
                <div className="list-part">More Frameworks</div>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Resources</h3>
                <div className="list-part">Documentation</div>
                <div className="list-part">Experts</div>
                <div className="list-part">Customers</div>
                <div className="list-part">Guides</div>
                <div className="list-part">Support</div>
                <div className="list-part">Api Reference</div>
                <div className="list-part">OSS</div>
                <div className="list-part">Command Line</div>
                <div className="list-part">Integrations</div>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Company</h3>
                <div className="list-part">Home</div>
                <div className="list-part">Blog</div>
                <div className="list-part">Changelog</div>
                <div className="list-part">About</div>
                <div className="list-part">Careers</div>
                <div className="list-part">Pricing</div>
                <div className="list-part">Enterprise</div>
                <div className="list-part">Security</div>
                <div className="list-part">Next.js Conf</div>
                <div className="list-part">Partners</div>
                <div className="list-part">Contact us</div>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Legal</h3>
                <div className="list-part">Privacy Policy</div>
                <div className="list-part">Terms of Service</div>
                <div className="list-part">Trademark Policy</div>
                <div className="list-part">Inactivity</div>
                <div className="list-part">DMCA Policy</div>
                <div className="list-part">DPA</div>
                <div className="list-part">SLA</div>
            </label>
          </div>
        </nav>
        <div className="inline-flex py-10 px-24 justify-center place-content-center">
        <div className="flex-col justify-start place-content-start items-start content-start">
          <div className="inline-flex bottom-0">
            <div className="w-8 h-8 fill-white">
              <svg viewBox="0 -17 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                  <polygon points="128 0 256 221.705007 0 221.705007"></polygon>
                </g>
              </svg>
            </div>
            <h3 className="text-white">Vercel</h3>
          </div>
          <p className="text-slate-600">Copyright © 2022 Vercel Inc. All rights reserved.</p>
        </div>
        <div className="w-1/3"></div>
        <Github size={36} />
        <div className=" h-1 text-white p-4">|</div>
         <Twitter size={36} />
        <div className="w-1/3"></div>
        <div className="bg-black rounded-sm inline-flex h-min w-auto border-slate-600 border-2">
          <h4 className="text-white text-sm ">Status:</h4>
          <h4 className="text-sm text-blue-700">● All Systems normal</h4>
        </div>
        <div className="w-1/3"></div>
        <div>
          <Select placeholder="Choose one">
            <Select.Option value="1">Light</Select.Option>
            <Select.Option value="2">Dark</Select.Option>
            <Select.Option value="2">Same as System</Select.Option>
          </Select>
        </div>
      </div>
      </footer>
    </div>
      </>
  )
}

export default Footer
