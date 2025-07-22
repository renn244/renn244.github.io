import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#121212] min-h-screen font-poppins mx-auto flex flex-col relative'>

      <NavBar />

      <div className='max-w-7xl mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
