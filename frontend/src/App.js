import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import Product from './pages/Product'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import { Footer } from './component/Footer'
import Cart from './pages/Cart'
import Productpage from './pages/Productpage'
import Adminlogin from './pages/Adminlogin'
import Adminp from './admin/Adminp'
import Adminnav from './admin/Adminnav'
// import List from './pages/List'
// import Order from './pages/Order'

const App = () => {
  const location = useLocation(); 


  const hideNavAndFooter = (location.pathname==="/Adminp"||location.pathname==="/Adminp/add"||location.pathname==="/Adminp/list"||location.pathname==="/Adminp/order");

  return (
    <div>
     
     {hideNavAndFooter ? <Adminnav /> : <Nav />}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Productpage/:id' element={<Productpage />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/adminp/*' element={<Adminp />} />
        <Route path='/admink' element={<Adminlogin />} />
        {/* <Route path='/list' element={<List/>} />
        <Route path='/order' element={<Order/>} /> */}
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  )
}

export default App
