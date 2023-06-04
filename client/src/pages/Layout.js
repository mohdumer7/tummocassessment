import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import AddCityForm from '../components/AddCityForm'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCities, setUser } from '../store/actions';
import { Toaster } from 'react-hot-toast';
import Main from './Main';

const Layout = () => {
  const [showModal,setShowModal] = useState(false)
  const authToken = useSelector((state) => state.authToken);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = ()=>{
    
    // const googleAuth = ()=>{
    //   window.open("http://localhost:5001/auth/logout","_self")
    // }
    navigate(0)
  }

  useEffect(()=>{
      axios.get('http://localhost:5001/user', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
        .then(response => {
         dispatch(setUser(response.data))
         dispatch(setCities(response.data.cities))
        })
        .catch(error => {
          navigate('/')
        });
    },[])

  return (<>
  <Toaster/>
  {user && (<div className={`w-full bg-slate-100 ${showModal?'blur-xl':''}`} >
    <nav className='w-full p-4 flex justify-between items-center text-white bg-slate-600 shadow-2xl'>
        <div>Tummoc Assessment (Mohammed Umer)</div>
        <button onClick={logout} className="p-2 bg-blue-500 rounded-md hover:bg-blue-800 transition">LOGOUT</button>
    </nav>
    <div className='w-full h-1/4  flex flex-col justify-center items-center m-7'>
        <h1 className='w-full  text-center text-black font-bold text-7xl'>{`Hi, ${user.name}`}</h1>
    </div>
    <div className='w-full p-4 flex flex-col justify-center items-center'>
      <button className='p-2 bg-blue-500 hover:bg-blue-800 transition text-white rounded-lg' onClick={()=>setShowModal(true)}>Add City</button>
      {user && (<Main user={user} />)}
    </div>
    </div>)}
    {showModal &&(<div className='absolute w-full flex justify-center items-center top-0 left-0'>
        <AddCityForm setShowModal={setShowModal} authToken={authToken} />
      </div>)
    }
  </>
  )
}

export default Layout