import React, { useState } from 'react'
import { Outlet } from 'react-router'
import AddCityForm from '../components/AddCityForm'

const Layout = () => {
  const [showModal,setShowModal] = useState(false)

  return (<>
    <div className={`w-full bg-slate-100 ${showModal?'blur-xl':''}`} >
    <nav className='w-full p-4 flex justify-between items-center text-white bg-slate-600 shadow-2xl'>
        <div >Tummoc Assessment (Mohammed Umer)</div>
        <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-800 transition">LOGOUT</button>
    </nav>
    <div className='w-full h-1/4  flex flex-col justify-center items-center m-7'>
        <h1 className='w-full  text-center text-black font-bold text-7xl'>Hi,User</h1>
    </div>
    <div className='w-full p-4 flex flex-col justify-center items-center'>
      <button className='p-2 bg-blue-500 hover:bg-blue-800 transition text-white rounded-lg' onClick={()=>setShowModal(true)}>Add City</button>
        <Outlet />
    </div>
    </div>
    {showModal &&
    (<div className='absolute w-full flex justify-center items-center top-0 left-0'>
        <AddCityForm setShowModal={setShowModal}/>
      </div>)
    }
  </>
  )
}

export default Layout