import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Auth = () => {
    const[login,setLogin] = useState(true);

  return (
    <div className="w-full h-screen ">
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div>
        <h1>All the required data here</h1>
        </div>

        <div className='w-1/4  shadow-2xl  flex flex-col rounded-lg '>
            <h1 className='w-full bg-gray-800 text-white p-2 text-center rounded-tl-lg rounded-tr-lg'>{login?'LOGIN':'SIGN UP'}</h1>
            <div className='flex justify-center p-3 w-full'>

            {login?
            <LoginForm setLogin={setLogin}/>:
            <SignupForm setLogin={setLogin}/>}
        </div>
        </div>

    </div>
    </div>
  )
}

export default Auth