import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { setUser } from '../store/actions';

export function useUpdateuser(authToken) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

  axios.get('http://localhost:5001/user', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
        .then(response => {
         console.log(response)
         dispatch(setUser(response.data))
        })
        .catch(error => {
          navigate('/')
        });
    return null
}
