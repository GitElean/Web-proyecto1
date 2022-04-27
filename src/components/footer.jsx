import '../styles/index.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-700 border-y border-slate-400 py-4 px-2 flex bottom-0">
        <nav className="flex">
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Frameworks</h3>
              <ul className="list-disc">
                <li className="list-part">Next.js</li>
                <li className="list-part">Create React App</li>
                <li className="list-part">Svelte</li>
                <li className="list-part">Nuxt</li>
                <li className="list-part">Gatsby</li>
                <li className="list-part">Vue</li>
                <li className="list-part">Angular</li>
                <li className="list-part">More Frameworks</li>
              </ul>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Resources</h3>
              <ul className="list-disc">
                <li className="list-part">Documentation</li>
                <li className="list-part">Experts</li>
                <li className="list-part">Customers</li>
                <li className="list-part">Guides</li>
                <li className="list-part">Support</li>
                <li className="list-part">Api Reference</li>
                <li className="list-part">OSS</li>
                <li className="list-part">Command Line</li>
                <li className="list-part">Integrations</li>
              </ul>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Company</h3>
              <ul className="list-disc">
                <li className="list-part">Home</li>
                <li className="list-part">Blog</li>
                <li className="list-part">Changelog</li>
                <li className="list-part">About</li>
                <li className="list-part">Careers</li>
                <li className="list-part">Pricing</li>
                <li className="list-part">Enterprise</li>
                <li className="list-part">Security</li>
                <li className="list-part">Next.js Conf</li>
                <li className="list-part">Partners</li>
                <li className="list-part">Contact us</li>
              </ul>
            </label>
          </div>
          <div className="footer-container">
            <label>
              <h3 className="footer-title">Legal</h3>
              <ul className="list-none">
                <li className="list-part">Privacy Policy</li>
                <li className="list-part">Terms of Service</li>
                <li className="list-part">Trademark Policy</li>
                <li className="list-part">Inactivity</li>
                <li className="list-part">DMCA Policy</li>
                <li className="list-part">DPA</li>
                <li className="list-part">SLA</li>
              </ul>
            </label>
          </div>
        </nav>
        <div className="inline-flex bottom-1">
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
      </footer>
    </div>
  )
}

export default Footer
