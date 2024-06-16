import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img style={{ width: '100px'}} src={import.meta.env.BASE_URL + "/assets/black-man (1).png"} alt="" />
        <p>Hi Nigger!</p>
        <audio src={import.meta.env.BASE_URL + "/assets/Gangsta Rap -  Ni__a Ni__a Ni__a  [HQ].mp3"} controls autoPlay loop></audio>
      </div>
    </>
  )
}

export default App
