import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useUpdateuser } from '../api/userApi';
import { setUser } from '../store/actions';
import { toast } from 'react-hot-toast';


const Cards = ({city,deleteCard}) => {

  return <>
  {city && (<div className="w-1/6 h-1/6 m-3 overflow-hidden shadow-2xl rounded-md p-3">
    <img className="w-full" src="/logo512.png" alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{city.cityName}</div>
      <p className="text-gray-700 text-base">
        {city.description} </p>
    </div>
    <button onClick={()=>deleteCard(city._id)} className='p-2 w-full bg-red-600 hover:bg-red-800 text-white transition rounded-lg'>delete</button>
  </div>)} 
  </>
 
}

export default Cards