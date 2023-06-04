import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCity, removeCity } from '../store/actions';

const AddCityForm = ({setShowModal,authToken}) => {
  const[cityForm,setCityForm] = useState({
    cityName:"",
    description:"",
    image:"",
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const datachange = (label,value)=>{
    setCityForm(val=>{
      const temp = val
      temp[label] = value
      return temp
    })
  }

  const onSubmit = async (e)=>{
    console.log(cityForm)
    e.preventDefault()
    axios.post('http://localhost:5001/city', cityForm,{
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(function (response) {
      console.log(response)
     toast.success("city Added")
     setShowModal(false)
     dispatch(addCity(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="w-full">
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div className='w-1/4  shadow-2xl  flex flex-col rounded-lg '>
            <h1 className='w-full bg-gray-800 text-white p-2 text-center rounded-tl-lg rounded-tr-lg'>Add City</h1>
            <div className='flex justify-center p-3 w-full'>

      <form className='w-full' onSubmit={onSubmit}>
        
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the city</label>
        <input onChange={(e)=>datachange("cityName",e.target.value)} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangalore" required/>

        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input onChange={(e)=>datachange("description",e.target.value)}  type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Awesome City" required/>

        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload an image</label>
        <input accept="image/*"  type="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>

        <div className='flex justify-between'>
        <button type="submit" className="text-white rounded-lg mt-4 transition bg-green-600 p-2 hover:bg-green-800 w-1/3">Submit</button>
        <button type="cancel" className="text-white rounded-lg mt-4 transition bg-red-600 p-2 hover:bg-red-800 w-1/3 " onClick={()=>setShowModal(false)}>cancel</button>
        </div>
     </form>
        </div>
        </div>

    </div>
    </div>
   
  )
}

export default AddCityForm