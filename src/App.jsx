import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pic from './assets/black-man (1).png'
import song from './assets/Gangsta Rap -  Ni__a Ni__a Ni__a  [HQ].mp3'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img style={{ width: '100px'}} src={pic} alt="" />
        <p>Hi Nigger!</p>
        <audio src={song} controls autoPlay loop></audio>
      </div>
    </>
  )
}

export default App
