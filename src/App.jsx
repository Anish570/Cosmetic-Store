import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='w-full h-dvh page-padding'>
      <h1 className="text-3xl font-bold text-center underline text-foreground py-3 ">
        MakeUp Store
      </h1>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App