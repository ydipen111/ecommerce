import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Expert from './Components/Expert'
import Newsletter from './Components/Newsletter'
import Plans from './Components/Plans'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>
        <Banner></Banner>
        <Expert></Expert>
        <Newsletter></Newsletter>
        <Plans></Plans>
    </>
  )
}

export default App
