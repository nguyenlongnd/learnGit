import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BranchA from './BranchA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>day la the h1</h1>
      <BranchA/>
    </>
  )
}

export default App
