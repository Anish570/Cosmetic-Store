import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
