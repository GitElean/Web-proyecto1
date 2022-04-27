import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import Animation from './components/animation'
import './styles/index.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDom.render(<GeistProvider>
    <CssBaseline />
    <Animation />
  </GeistProvider>, document.getElementById('app'))
