import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
