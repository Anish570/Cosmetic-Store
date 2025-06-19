import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='w-full h-dvh'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App