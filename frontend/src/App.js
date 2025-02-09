import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import Product from './pages/Product';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import { Footer } from './component/Footer';
import Cart from './pages/Cart';
import Productpage from './pages/Productpage';
const App = () => {
  
  return (
    <div>

    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Product' element={<Product/>} />
    <Route path='/Productpage/:id' element={<Productpage/>} />

    <Route path='/Blog' element={<Blog/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/SignIn' element={<SignIn/>} />

    </Routes>
    <Footer/>
    </div>

  )
}

export default App
