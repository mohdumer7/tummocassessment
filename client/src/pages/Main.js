import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { removeCity } from '../store/actions';

const Main = ({user}) => {
 const navigate = useNavigate();
 const authToken = useSelector((state) => state.authToken);
 const dispatch = useDispatch();
 const cities = useSelector((state) => state.cities);

 const deleteCard = (id)=>{
  axios.delete(`http://localhost:5001/city/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(response => {
      toast.success('deleted')
      dispatch(removeCity(id))
    })
    .catch(error => {
      navigate('/')
    });
 }

console.log(cities)
  return (
    <div className='w-full p-4 mt-4 flex '>
      {cities.map(city=><Card key={city._id} city={city} deleteCard={deleteCard}/>)}
    </div>
  )
}

export default Main