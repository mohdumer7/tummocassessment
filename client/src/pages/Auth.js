import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUser } from '../store/actions';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router';


const Auth = () => {
    const[login,setLogin] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate();
   
const Login = (loginformdata)=>{
  axios.post('http://localhost:5001/auth/login', loginformdata)
  .then(function (response) {

    dispatch(setAuthToken(response.data.token));
    toast.success("Successfull")
    navigate('/posts')
  })
  .catch(function (error) {
    console.log(error);
  });
}


const Register = (registeruser,google=false)=>{
  axios.post('http://localhost:5001/auth/register', registeruser)
      .then(function (response) {
        console.log(response);
        if(google){
          Login({email:registeruser.email,password:"random"}) 
        }else{
          setLogin(true)
          toast.success("Successfull")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
    
  const onSuccess = (response)=>{
    console.log(response)
    const {email,name} = jwt_decode(response.credential)
    console.log(email,name)
    axios.get('http://localhost:5001/user/getall')
    .then(function (response) {
      const users = response.data
      const isUser = users.find(user=>user.email === email)
      if(isUser){
        Login({email,password:"random"})
      }else{
        Register({name,email,password:"random"},true)
      }
      // dispatch(setAuthToken(response.data.token));
      // toast.success("Successfull")
      // navigate('/posts')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const onFailure = (err)=>{
    navigate(0)
  }

  
  useEffect(()=>{
    // getUser()
  },[])
    
  return (
    <div className="w-full h-screen ">
       <Toaster/>
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div>
        <h1>All the required data here</h1>
        </div>

        <div className='w-1/4  shadow-2xl  flex flex-col rounded-lg '>
            <h1 className='w-full bg-gray-800 text-white p-2 text-center rounded-tl-lg rounded-tr-lg'>{login?'LOGIN':'SIGN UP'}</h1>
            <div className='flex justify-center p-3 w-full'>

            {login?
            <LoginForm setLogin={setLogin} Login={Login}  onSuccess={onSuccess} onFailure={onFailure}/>:
            <SignupForm setLogin={setLogin} Register={Register} onSuccess={onSuccess} onFailure={onFailure} />}
        </div>
        </div>

    </div>
    </div>
  )
}

export default Auth