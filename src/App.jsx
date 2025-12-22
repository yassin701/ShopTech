import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import './App.css'
import Catalogue from './pages/Catalogue'
import Footer from './Components/Footer'
import WishList from './pages/WishList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalogue' element={<Catalogue/>}/>
      <Route path='/WishList' element={<WishList/>}/>
      
    </Routes>
    <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
     <Footer/>
    </BrowserRouter>
  )
}

export default App
