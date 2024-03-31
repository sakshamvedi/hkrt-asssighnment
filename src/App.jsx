import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terminal from './Pages/Terminal'
import Count from './Count'
import Context from './Context/Context'
import ContextProvider from './Context/ContextProvider'

function App() {


  return (
    <Context>
      <Count />
    </Context>
  )
}

export default App
