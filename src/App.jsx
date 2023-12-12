import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Banner from './Components/Banner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>
        <Banner></Banner>
    </>
  )
}

export default App
