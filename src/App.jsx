import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import './App.css'
import Catalogue from './pages/Catalogue'

function App() {


  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalogue' element={<Catalogue/>}/>
   
    </Routes>
    </BrowserRouter>
  )
}

export default App
