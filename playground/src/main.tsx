import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { normalize } from '../../breakwind/src/main'

// normalize()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
