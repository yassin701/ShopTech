import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import './App.css'
import Catalogue from './pages/Catalogue'
import Footer from './Components/Footer'
import WishList from './pages/WishList'

function App() {


  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalogue' element={<Catalogue/>}/>
      <Route path='/WishList' element={<WishList/>}/>
   
    </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
