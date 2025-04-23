import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='bg-black  flex flex-col text-white  gap-2'>

<div className='text-white  flex justify-center  border-2 w-32 '>
        <Link to='/Adminp/add'>

        <div className='flex  items-center gap-3'>
            <p>

        <IoIosAddCircleOutline />
            </p>
        <p className='text-white'>
            add
        </p>
        </div>
        </Link>
    </div>
    <div className='text-white  flex justify-center  border-2 w-32 '>
        <Link to='/Adminp/list'>

        <div className='flex  items-center gap-3'>
            <p>

        <IoIosAddCircleOutline />
            </p>
        <p className='text-white'>
            list item
        </p>
        </div>
        </Link>
    </div>
    <div className='text-white  flex justify-center  border-2 w-32 '>
        <Link to='/Adminp/order'>

        <div className='flex  items-center gap-3'>
            <p>

        <IoIosAddCircleOutline />
            </p>
        <p className='text-white'>
            order
        </p>
        </div>
        </Link>
    </div>
</div>
  )
}

export default Sidebar