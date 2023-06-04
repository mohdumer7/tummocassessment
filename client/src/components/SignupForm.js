import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../store/actions';
import GoogleSignIn from './GoogleSignIn';
import { GoogleLogin } from '@react-oauth/google';


const SignupForm = ({setLogin,onSuccess, onFailure,Register}) => {

    const[registeruser,setRegisteruser] = useState({name:"",email:"",password:""})
    const dispatch = useDispatch();


    const datachange = (label,value)=>{
        setRegisteruser(val=>{
        const temp = val
        temp[label] = value
        return temp
      })
    }
  
    const onSubmit = async (e)=>{
      e.preventDefault()
      Register(registeruser)
    }

    return (
        <>
        <form className='w-full' onSubmit={onSubmit}>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input onChange={(e)=>datachange("name",e.target.value)} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required/>
    
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input onChange={(e)=>datachange("email",e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@example.com" required/>
    
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input onChange={(e)=>datachange("password",e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
    
            <button type="submit" className="text-white rounded-lg transition mt-4 bg-gray-600 p-2 hover:bg-gray-800 w-full">Submit</button>
         {/* <button onClick={googleAuth} type="button" className="text-white w-full mt-2  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign In with Google<div></div></button> */}
         <div className='w-full flex justify-center p-2 mt-1' >
          <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
          </div>
         <p className='mt-3 p-2 hover:bg-gray-600 hover:text-white transition text-center cursor-pointer' onClick={()=>setLogin(true)}>Already a User? Login!</p>
        </form>
        </>
      )
}

export default SignupForm