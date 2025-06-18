import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='w-full h-dvh'>
      <h1 className="text-2xl font-bold text-center underline text-foreground py-3 h-16">

        MakeUp Store
      </h1>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App