import React from 'react'
 import Additem from '../pages/Additem'
 import List from '../pages/List'
 import Order from '../pages/Order'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'



const Adminp = () => {
  return (
    <div className='bg-black text-white flex flex-row h-screen'>

      <div className="  flex  mt-20 ">
        <div className=''>
          <Sidebar />
          <hr className='text-white' />
        </div>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)]'>
           
          <Routes>
          <Route path="/" element={
            <>
              <Additem />
              <List />
              <Order />
            </>
          } />
           <Route index element={<Additem/>} />
            <Route path='add' element={<Additem/>} />
            <Route path='list' element={<List/>} />
            <Route path='order' element={<Order/>} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default Adminp