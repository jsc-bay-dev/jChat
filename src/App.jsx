import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profileupdate' element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App
